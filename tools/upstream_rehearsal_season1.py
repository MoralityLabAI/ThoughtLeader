"""Retain unmodified GPTStoryworld rehearsal output as a diagnostic, not engine proof."""
import argparse
import hashlib
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--runs", type=int, default=5000)
    parser.add_argument("--seed", type=int, default=20260911)
    args = parser.parse_args()
    if args.runs < 1:
        parser.error("--runs must be positive")
    script = ROOT / "tools/gptstoryworld/monte_carlo_rehearsal.py"
    reports = ROOT / "season1/reports"
    reports.mkdir(parents=True, exist_ok=True)
    result = {
        "purpose": "Unmodified upstream Python diagnostics; use season-rehearsal.json for the delivered engine.",
        "limitations": [
            "The upstream simulator aliases multi-element belief keyrings to their first element.",
            "It starts with an empty state rather than initializing character properties.",
            "Late-block counters are not implemented and its secret scan uses page_secret_, not ending_kind.",
        ],
        "runs_per_episode": args.runs,
        "seed": args.seed,
        "script_sha256": hashlib.sha256(script.read_bytes()).hexdigest(),
        "episodes": [],
    }
    for number in range(1, 7):
        world = ROOT / f"season1/worlds/episode-{number:02}.json"
        run = subprocess.run(
            [sys.executable, str(script), str(world), "--runs", str(args.runs), "--seed", str(args.seed + number - 1)],
            capture_output=True, text=True, encoding="utf-8", errors="replace",
        )
        output = reports / f"episode-{number:02}-upstream-rehearsal.txt"
        output.write_text(run.stdout + run.stderr, encoding="utf-8")
        result["episodes"].append({
            "episode": number, "exit_code": run.returncode,
            "world_sha256": hashlib.sha256(world.read_bytes()).hexdigest(),
            "raw_output": output.name,
        })
        print(f"Episode {number}: {args.runs} upstream diagnostic runs, exit {run.returncode}", flush=True)
    result["completed"] = all(e["exit_code"] == 0 for e in result["episodes"])
    (reports / "upstream-rehearsal.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    return 0 if result["completed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
