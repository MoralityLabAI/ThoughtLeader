#!/usr/bin/env python3
"""Compile editable Season 1 drafts to SweepWeave, scripts, and an offline catalog.

No models or network calls. Rebuilding never writes to the recovered originals.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEASON = ROOT / "season1"
VENDOR = ROOT / "tools" / "gptstoryworld"
sys.path.insert(0, str(VENDOR))
from sweepweave_validator import validate_storyworld
from storyworld_quality_gate import evaluate_storyworld

UPSTREAM = "9a8ef1d3a78f8de0d53868259edf62b44986f854"
AXES = {
    "Evidence": "Independently preserved support for a bounded causal claim.",
    "Ascription": "Readiness to attribute organized intent; neither end is inherently correct.",
    "Consent": "Meaningful permission and the practical ability to refuse or leave.",
    "Pressure": "Institutional urgency, exposure and demands for a simple answer.",
    "Trust": "Working confidence between investigators and affected people.",
    "Mandate": "Accountable, documented authority for the proposed remedy.",
    "Care": "Material protection and support available to affected people.",
    "Restraint": "Discipline in limiting intervention and the scope of claims.",
}
KINDS = ["calibrated", "overreach", "reductive", "unresolved", "secret"]
GATE = "page_finding_council"


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def constant(value):
    return {"script_element_type": "Pointer", "pointer_type": "Bounded Number Constant", "value": value}


def words(value):
    return {"script_element_type": "Pointer", "pointer_type": "String Constant", "value": value}


def pointer(axis, character="char_bureau", target=None):
    return {"script_element_type": "Pointer", "pointer_type": "Bounded Number Pointer",
            "character": character, "keyring": [axis] + ([target] if target else []), "coefficient": 1.0}


def op(kind, *operands):
    return {"script_element_type": "Operator", "operator_type": kind, "operands": list(operands)}


def gte(axis, threshold):
    return {**op("Arithmetic Comparator", pointer(axis), constant(threshold)),
            "operator_subtype": "Greater Than or Equal To"}


def effect(axis, amount, character="char_bureau", target=None):
    ptr = pointer(axis, character, target)
    return {"effect_type": "Bounded Number Effect", "Set": ptr,
            "to": op("Nudge", ptr, constant(round(amount, 4)))}


def score(axis, supported):
    # The reader keys beliefs by full keyring. Never alias these to ground truth.
    sign = -1 if axis == "Pressure" else 1
    evidence = op("Addition", op("Multiplication", constant(sign), pointer(axis)),
                  op("Multiplication", constant(0.35), pointer("Trust", "char_voidt", "char_lamport")),
                  op("Multiplication", constant(0.2), pointer("Trust", "char_lamport", "char_voidt")))
    return op("Addition", constant(0.01 if supported else 0),
              op("Multiplication", constant(1 if supported else -1), evidence))


def check_source(draft):
    number = draft["episode"]
    scenes = draft["scenes"]
    assert len(scenes) == 18, (number, "Expected 18 substantial scenes")
    assert Counter(s["act"] for s in scenes) == {1: 6, 2: 6, 3: 6}, (number, "Act density")
    assert [s["act"] for s in scenes] == sorted(s["act"] for s in scenes), "Acts must be ordered"
    assert len({s["id"] for s in scenes}) == 18, "Duplicate scene IDs"
    assert len(draft["endings"]) == 5 and {e["kind"] for e in draft["endings"]} == set(KINDS)
    for scene in scenes:
        assert 50 <= len(scene["text"].split()) <= 300, (number, scene["id"], "Scene word count")
        assert scene["cue_tier"] in ("state", "dynamics", "counterfactual")
        assert len(scene["options"]) == 3, (number, scene["id"], "Three choices required")
        for option in scene["options"]:
            assert len(option["effects"]) >= 4 and set(option["effects"]) <= set(AXES)
            assert option["response_axis"] in AXES
            assert all(isinstance(v, (int, float)) and -0.3 <= v <= 0.3 for v in option["effects"].values())
            assert len(option["reactions"]) == 2
            for reaction in option["reactions"]:
                assert 20 <= len(reaction["text"].split()) <= 150, (number, scene["id"], "Reaction word count")
                assert set(reaction.get("effects", {})) <= set(AXES)
                assert "source_note" in reaction
    for ending in draft["endings"]:
        assert ending["id"].startswith("page_end_")
        assert 70 <= len(ending["text"].split()) <= 300, (number, ending["id"], "Ending word count")
    source_episode = 4 if number == 5 else number
    recovery = json.loads((SEASON / "recovery" / f"episode-{source_episode:02}.json").read_text(encoding="utf-8"))
    known = {e["id"] for e in recovery["encounters"]}
    for scene in scenes:
        assert set(scene.get("source_ids", [])) <= known, (number, scene["id"], "Unknown source encounter")


def compile_episode(draft):
    check_source(draft)
    number = draft["episode"]
    slug = f"episode-{number:02}"
    image = f"assets/pixel/ep{number:02}.png"
    source_episode = 4 if number == 5 else number
    world = {
        "IFID": f"THOUGHTLEADER-S1-DRAFT-20260911-EP{number:02}",
        "title": f"Thought Leader — {number}. {draft['title']}",
        "about_text": draft["premise"] + "\n\nSeason 1 reconstruction draft. " + draft["reconstruction_note"],
        "css_theme": "dark", "debug_mode": False, "display_mode": "default",
        "creation_time": 1789084800.0, "modified_time": 1789084800.0,
        "characters": [
            {"id": "char_bureau", "name": "Case record", "bnumber_properties": {p: 0.0 for p in AXES}},
            {"id": "char_voidt", "name": "Kaitlyn Voidt", "bnumber_properties": {"Trust::char_lamport": 0.0}},
            {"id": "char_lamport", "name": "Dudley Lamport", "bnumber_properties": {"Trust::char_voidt": 0.0}},
        ],
        "authored_properties": [{"id": p, "property_name": p, "property_type": "bounded number",
                                  "default_value": 0.0, "description": desc} for p, desc in AXES.items()],
        "spools": [], "encounters": [],
        "reconstruction": {
            "status": "playable_draft", "edition": "season1-draft-1", "episode": number,
            "gptstoryworld_commit": UPSTREAM, "authoring_source": f"authored/{slug}.json",
            "recovery_source": None if number == 4 else f"recovery/episode-{source_episode:02}.json",
            "new_mechanics": True, "new_endings_prose": True, "new_art": True,
            "art_status": "restored original indexed portraits and native scene grammar; six new pixel settings",
            "profile": "compact narrative draft; not a high-dimensional reasoning benchmark",
            "nudge_semantics": "clamp(current + amount, -1, 1), matching the checked-in GPTStoryworld reader",
            "cast": draft.get("cast", []), "counterfactual_cues": [s["id"] for s in draft["scenes"] if s["cue_tier"] == "counterfactual"],
        },
    }
    for act in (1, 2, 3):
        ids = [s["id"] for s in draft["scenes"] if s["act"] == act]
        if act == 3:
            ids.append(GATE)
        world["spools"].append({"id": f"spool_act{act}", "spool_type": "General",
                                 "spool_name": f"Act {act}", "creation_index": act - 1,
                                 "starts_active": act == 1, "encounters": ids})
    world["spools"].append({"id": "spool_endings", "spool_type": "General", "spool_name": "Findings",
                             "creation_index": 3, "starts_active": False,
                             "encounters": [e["id"] for e in draft["endings"]]})
    for i, scene in enumerate(draft["scenes"]):
        target = draft["scenes"][i + 1]["id"] if i < 17 else GATE
        encounter = {"id": scene["id"], "title": scene["title"], "creation_index": i,
                     "connected_spools": [f"spool_act{scene['act']}"], "earliest_turn": 0, "latest_turn": 100,
                     "text_script": words(scene["text"]), "acceptability_script": True,
                     "desirability_script": op("Addition", constant(1), pointer("Pressure")),
                     "image": image, "options": [],
                     "author_notes": {"source_ids": scene.get("source_ids", []), "cue_tier": scene["cue_tier"],
                                      "text_status": "new" if not scene.get("source_ids") else "adapted_from_recovered_prose"}}
        for j, choice in enumerate(scene["options"]):
            oid = f"{scene['id']}_o{j}"
            option = {"id": oid, "text_script": words(choice["text"]), "visibility_script": True,
                      "performability_script": True, "reactions": []}
            for k, outcome in enumerate(choice["reactions"]):
                changes = dict(choice["effects"])
                changes.update(outcome.get("effects", {}))
                changes["Trust"] = round(changes.get("Trust", 0) + (0.02 if k == 0 else -0.02), 4)
                effects = [effect(p, value) for p, value in changes.items()]
                effects += [effect("Trust", 0.025 if k == 0 else -0.02, "char_voidt", "char_lamport"),
                            effect("Trust", 0.02 if k == 0 else -0.025, "char_lamport", "char_voidt")]
                reaction = {"id": f"{oid}_r{k}", "text_script": words(outcome["text"]),
                            "desirability_script": score(choice["response_axis"], k == 0),
                            "consequence_id": target, "after_effects": effects,
                            "author_notes": {"source_note": outcome["source_note"], "response_axis": choice["response_axis"],
                                             "condition": "higher axis + mutual trust" if k == 0 else "lower axis + mutual trust"}}
                if i in (5, 11):
                    reaction["deactivate_spools"] = [f"spool_act{scene['act']}"]
                    reaction["activate_spools"] = [f"spool_act{scene['act'] + 1}"]
                option["reactions"].append(reaction)
            encounter["options"].append(option)
        world["encounters"].append(encounter)

    # Use the skill's requested scaffold helper, then populate the authored filing gate.
    scaffold = SEASON / ".build" / f"{slug}.json"
    write_json(scaffold, world)
    subprocess.run([sys.executable, str(VENDOR / "new_encounter.py"), str(scaffold), GATE, "What the record can carry"], check=True)
    world = json.loads(scaffold.read_text(encoding="utf-8"))
    gate = world["encounters"][-1]
    gate.update({"creation_index": 18, "connected_spools": ["spool_act3"], "earliest_turn": 0, "latest_turn": 100,
                 "text_script": words("The room has reached the part of a case that no machine can sign for you. Voidt has put the witnesses' corrections beside the analytical timeline; Lamport has marked what each retained artifact can and cannot establish. The Bureau wants one finding. A finding will change what it is permitted to do next, and what the people outside this room will have to live with. Choose the claim you will put your name behind. A bounded attribution requires evidence. A joint remedy also requires consent and a usable mandate; those proposals appear only when the preceding work supports them."),
                 "acceptability_script": True, "desirability_script": pointer("Evidence"), "image": image,
                 "author_notes": {"source_ids": [], "text_status": "new", "function": "state-gated final filing decision"}})
    labels = {
        "calibrated": "File the bounded attribution supported by the retained evidence.",
        "overreach": "Declare a single intentional operation beyond the limits of the record.",
        "reductive": "Close the coordination question as unrelated individual acts.",
        "unresolved": "Publish what was established and explicitly leave the remaining question open.",
        "secret": "Offer an accountable remedy with the affected people's authority and right to refuse.",
    }
    gates = {"calibrated": gte("Evidence", 0.12), "secret": op("And", gte("Evidence", 0.15), gte("Consent", 0.05), gte("Mandate", -0.1))}
    for j, kind in enumerate(KINDS):
        ending = next(e for e in draft["endings"] if e["kind"] == kind)
        oid = f"{GATE}_{kind}"
        criterion = gates.get(kind, True)
        option = {"id": oid, "text_script": words(labels[kind]), "visibility_script": criterion,
                  "performability_script": criterion, "reactions": []}
        for k in range(2):
            filing_text = ("Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record."
                           if k == 0 else "The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.")
            option["reactions"].append({"id": f"{oid}_r{k}", "text_script": words(filing_text),
                                        "desirability_script": score("Trust", k == 0), "consequence_id": ending["id"],
                                        "after_effects": [effect("Pressure", -0.03), effect("Trust", 0.02 if k == 0 else -0.02),
                                                          effect("Restraint", 0.05 if kind in ("calibrated", "unresolved", "secret") else -0.06),
                                                          effect("Care", 0.04 if kind == "secret" else 0.01)],
                                        "deactivate_spools": ["spool_act3"], "activate_spools": ["spool_endings"]})
        gate["options"].append(option)
    for i, ending in enumerate(draft["endings"]):
        world["encounters"].append({"id": ending["id"], "title": ending["title"], "creation_index": 19 + i,
                                    "connected_spools": ["spool_endings"], "earliest_turn": 0, "latest_turn": 100,
                                    "text_script": words(ending["text"]), "acceptability_script": True,
                                    "desirability_script": pointer("Evidence"), "options": [], "image": image,
                                    "ending_kind": ending["kind"], "author_notes": {"source_note": ending["source_note"]}})
    return world


def script_markdown(draft, world):
    chunks = [f"# {world['title']}", "", draft["premise"], "", "Reconstruction draft. " + draft["reconstruction_note"],
              "", "Spoilers: this script includes both state-dependent reactions and every ending."]
    for scene in draft["scenes"]:
        chunks += ["", f"## Act {scene['act']} · {scene['title']}", "", scene["text"], "",
                   f"Source scenes: {', '.join(scene.get('source_ids', [])) or 'new writing'} · Cue: {scene['cue_tier']}"]
        for i, option in enumerate(scene["options"], 1):
            chunks += ["", f"### {i}. {option['text']}", "", "Choice effects: " + ", ".join(f"{k} {v:+.2f}" for k, v in option["effects"].items())]
            for label, reaction in zip(("Higher support", "Lower support"), option["reactions"]):
                chunks += ["", f"{label}: {reaction['text']}"]
    chunks += ["", "## Final filing", "", "The reader offers five findings. The bounded finding and joint remedy are available only when their state gates pass."]
    for ending in draft["endings"]:
        chunks += ["", f"### {ending['title']} ({ending['kind']})", "", ending["text"]]
    return "\n".join(chunks) + "\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--episode", type=int)
    args = parser.parse_args()
    sources = sorted((SEASON / "authored").glob("episode-*.json"))
    if args.episode:
        sources = [p for p in sources if p.stem == f"episode-{args.episode:02}"]
    if not sources:
        raise SystemExit("No authored episodes found")
    (SEASON / "worlds").mkdir(exist_ok=True)
    (SEASON / "scripts").mkdir(exist_ok=True)
    (SEASON / "reports").mkdir(exist_ok=True)
    for source in sources:
        draft = json.loads(source.read_text(encoding="utf-8"))
        path = SEASON / "worlds" / source.name
        if path.exists():
            errors_before = validate_storyworld(str(path))
            if errors_before:
                raise SystemExit(f"Existing world is invalid: {path}: {errors_before}")
        world = compile_episode(draft)
        world["reconstruction"]["authored_sha256"] = hashlib.sha256(source.read_bytes()).hexdigest()
        write_json(path, world)
        errors = validate_storyworld(str(path))
        if errors:
            raise SystemExit(f"{source.name}: {errors}")
        (SEASON / "scripts" / (source.stem + ".md")).write_text(script_markdown(draft, world), encoding="utf-8")
        quality = evaluate_storyworld(world, errors)
        quality["interpretation"] = "Unmodified upstream late-polish gate; failures are not hidden. This delivery targets the documented compact draft profile."
        write_json(SEASON / "reports" / (source.stem + "-upstream-quality.json"), quality)
        # The upstream text exporter uses storyworld_title; the browser uses title.
        # Adapt only its temporary input, keeping the tested runtime world unchanged.
        swmd_input = SEASON / ".build" / (source.stem + "-swmd.json")
        write_json(swmd_input, {**world, "storyworld_title": world["title"]})
        swmd_output = SEASON / "scripts" / (source.stem + ".swmd.md")
        subprocess.run([sys.executable, str(VENDOR / "json_to_swmd.py"), str(swmd_input), str(swmd_output)], check=True, stdout=subprocess.DEVNULL)
        print(f"{source.name}: {len(world['encounters'])} encounters; schema VALID")
    worlds = [json.loads(p.read_text(encoding="utf-8")) for p in sorted((SEASON / "worlds").glob("episode-*.json"))]
    catalog = {"edition": "season1-draft-1", "episodes": [
        {"episode": w["reconstruction"]["episode"], "title": w["title"], "world": f"worlds/episode-{w['reconstruction']['episode']:02}.json",
         "script": f"scripts/episode-{w['reconstruction']['episode']:02}.md", "image": f"assets/pixel/ep{w['reconstruction']['episode']:02}.png"}
        for w in worlds]}
    write_json(SEASON / "catalog.json", catalog)
    # A JS data bundle permits local file:// play with no fetch/CORS dependency.
    bundle = "window.THOUGHTLEADER_SEASON = " + json.dumps(worlds, ensure_ascii=False, separators=(",", ":")) + ";\n"
    (SEASON / "season-data.js").write_text(bundle, encoding="utf-8")
    fingerprinted = [*sorted((SEASON / "authored").glob("episode-*.json")), *sorted((SEASON / "worlds").glob("episode-*.json")), *sorted((SEASON / "scripts").glob("*.md")),
                     SEASON / "season-data.js", SEASON / "catalog.json", SEASON / "storyworld_reader.html", Path(__file__).resolve(),
                     *sorted((SEASON / "assets/pixel").glob("*.js")), SEASON / "assets/pixel/manifest.json"]
    write_json(SEASON / "reports" / "build.json", {"upstream_commit": UPSTREAM, "upstream_working_copy": True, "worlds": len(worlds),
        "sha256": {p.relative_to(ROOT).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest() for p in fingerprinted}})
    write_json(VENDOR / "source-hashes.json", {"checkout_head": UPSTREAM, "working_copy_had_preexisting_changes": True,
        "skill_sha256": "8afc8e3c76d3cc42474b5f41b5e0c6263a67490419bb90e70b0c03cd31083197",
        "original_reader_sha256": "faee255e45f172bac5e9d38364ace411fa6a5e6093c5dd3285347ed45ba9a42f",
        "scripts": {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(VENDOR.glob("*.py"))}})


if __name__ == "__main__":
    main()
