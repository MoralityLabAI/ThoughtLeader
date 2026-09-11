"""Extract authored Thought Leader prose from locally preserved GPTStoryworld logs.

Agent rationale, diary summaries, account data, and absolute local paths are omitted.
Run with --source-repo pointing at an intact GPTStoryworld checkout.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import OrderedDict
from pathlib import Path


RUN_ROOTS = (
    ("runs/thought_leader_codex_agents_fixed_20260803", "authoritative_corrected"),
    ("runs/thought_leader_codex_agents_20260803", "supplementary_diagnostic"),
)

LIMITS = [
    "This is authored prose recovered from playtest observations, not an intact original storyworld.",
    "Corrected runs take precedence. Diagnostic runs supplement missing scenes, visible options, and chosen reactions only; their effect summaries may flatten operator semantics.",
    "Only options visible on observed paths survive. Unvisited branches, hidden eligibility rules, initial state, character definitions, complete effects, and exact ending gates are not recoverable here.",
    "The logs stop before rendering terminal encounters; ending identifiers and selected closing reactions survive, but ending scene text does not.",
    "Long About descriptions and some option labels were truncated by the original playtest encoder.",
    "Scene and reaction prose may contain original production-density padding. New draft editing must be distinguished from recovered wording.",
    "Original art payloads are not present in these text logs.",
]


def parse_prompt(prompt: str) -> tuple[str, str, str, list[tuple[str, str]]]:
    title_match = re.search(r"^Storyworld: (.+)$", prompt, re.MULTILINE)
    about_match = re.search(r"^About: (.+)$", prompt, re.MULTILINE)
    scene_match = re.search(
        r"\nScene:\n(.*?)\n\nChoose one option from this fixed list:\n(.*)\Z",
        prompt,
        re.DOTALL,
    )
    if scene_match is None:
        raise ValueError("Observed prompt does not contain expected scene/options delimiters")
    options = []
    for line in scene_match.group(2).splitlines():
        match = re.match(r"^- ([^:]+): (.*)$", line)
        if match:
            options.append((match.group(1), match.group(2)))
    return (
        title_match.group(1) if title_match else "Thought Leader",
        about_match.group(1) if about_match else "",
        scene_match.group(1),
        options,
    )


def extract(source_repo: Path, output_dir: Path) -> list[dict]:
    episodes: dict[int, dict] = {}
    observation_counts: dict[int, int] = {}
    for relative_root, source_role in RUN_ROOTS:
        run_root = source_repo / relative_root
        if not run_root.is_dir():
            raise FileNotFoundError(f"Missing source directory: {relative_root}")
        for trace_path in sorted(run_root.glob("*/ep*/generations.jsonl")):
            episode_match = re.match(r"ep([1-6])_thought-leader-", trace_path.parent.name)
            if not episode_match:
                continue
            episode_number = int(episode_match.group(1))
            relative_path = trace_path.relative_to(source_repo).as_posix()
            source_run = trace_path.parent.parent.name
            data = trace_path.read_bytes()
            episode = episodes.setdefault(
                episode_number,
                {
                    "schema_version": 1,
                    "episode": episode_number,
                    "title": "",
                    "about": "",
                    "recovery_status": "partial_authored_prose_from_playtest_logs",
                    "sources": [],
                    "fidelity_limits": LIMITS,
                    "encounters": OrderedDict(),
                },
            )
            episode["sources"].append(
                {
                    "path": relative_path,
                    "sha256": hashlib.sha256(data).hexdigest(),
                    "source_run": source_run,
                    "role": source_role,
                }
            )
            for line in data.decode("utf-8-sig").splitlines():
                if not line.strip():
                    continue
                row = json.loads(line)
                title, about, scene, visible_options = parse_prompt(row["prompt_text"])
                observation_counts[episode_number] = observation_counts.get(episode_number, 0) + 1
                if not episode["title"]:
                    episode["title"], episode["about"] = title, about
                encounter_id = row["encounter_id"]
                encounters = episode["encounters"]
                encounter = encounters.setdefault(
                    encounter_id,
                    {
                        "id": encounter_id,
                        "title": encounter_id.removeprefix("page_").replace("_", " ").title(),
                        "title_status": "derived_navigation_label",
                        "text": scene,
                        "text_source_run": source_run,
                        "text_source_role": source_role,
                        "text_variants": [],
                        "options": OrderedDict(),
                        "observed_next": [],
                    },
                )
                if scene != encounter["text"] and all(v["text"] != scene for v in encounter["text_variants"]):
                    encounter["text_variants"].append(
                        {"text": scene, "source_run": source_run, "source_role": source_role}
                    )
                for option_id, option_text in visible_options:
                    option = encounter["options"].setdefault(
                        option_id,
                        {
                            "id": option_id,
                            "text": option_text,
                            "text_source_run": source_run,
                            "text_source_role": source_role,
                            "recovered_reactions": [],
                        },
                    )
                    # Selected-option text occasionally preserves a longer original label.
                    if option_id == row.get("chosen_option_id"):
                        selected_text = row.get("chosen_option_text", "")
                        if len(selected_text) > len(option["text"]):
                            option["text"] = selected_text
                            option["text_source_run"] = source_run
                            option["text_source_role"] = source_role
                chosen_id = row["chosen_option_id"]
                chosen = encounter["options"].setdefault(
                    chosen_id,
                    {
                        "id": chosen_id,
                        "text": row.get("chosen_option_text", chosen_id),
                        "text_source_run": source_run,
                        "text_source_role": source_role,
                        "recovered_reactions": [],
                    },
                )
                reaction = {
                    "text": row.get("chosen_reaction_text", ""),
                    "next_encounter_id": row.get("next_encounter_id"),
                    "effect_deltas": row.get("effect_deltas", []),
                    "source_run": source_run,
                    "source_role": source_role,
                }
                identity = (reaction["text"], reaction["next_encounter_id"], json.dumps(reaction["effect_deltas"]), source_role)
                if not any(
                    (r["text"], r["next_encounter_id"], json.dumps(r["effect_deltas"]), r["source_role"]) == identity
                    for r in chosen["recovered_reactions"]
                ):
                    chosen["recovered_reactions"].append(reaction)
                next_id = row.get("next_encounter_id")
                if next_id and next_id not in encounter["observed_next"]:
                    encounter["observed_next"].append(next_id)
    if sorted(episodes) != [1, 2, 3, 4, 5, 6]:
        raise ValueError("Expected recoverable observations for all six episodes")
    output_dir.mkdir(parents=True, exist_ok=True)
    summaries = []
    for episode_number, episode in sorted(episodes.items()):
        episode["encounters"] = list(episode["encounters"].values())
        for encounter in episode["encounters"]:
            encounter["options"] = list(encounter["options"].values())
            if not encounter["text_variants"]:
                encounter.pop("text_variants")
        known_ids = {e["id"] for e in episode["encounters"]}
        all_next = {n for e in episode["encounters"] for n in e["observed_next"]}
        episode["summary"] = {
            "observation_count": observation_counts[episode_number],
            "recovered_scene_count": len(episode["encounters"]),
            "authoritative_scene_count": sum(e["text_source_role"] == "authoritative_corrected" for e in episode["encounters"]),
            "visible_option_count": sum(len(e["options"]) for e in episode["encounters"]),
            "options_with_recovered_reactions": sum(bool(o["recovered_reactions"]) for e in episode["encounters"] for o in e["options"]),
            "observed_ending_ids": sorted(n for n in all_next if n.startswith("page_end_")),
            "referenced_unrecovered_encounter_ids": sorted(all_next - known_ids),
        }
        target = output_dir / f"episode-{episode_number:02d}.json"
        target.write_text(json.dumps(episode, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        summaries.append({"episode": episode_number, "title": episode["title"], **episode["summary"]})
    return summaries


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-repo", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, default=Path("season1/recovery"))
    args = parser.parse_args()
    print(json.dumps(extract(args.source_repo, args.output_dir), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
