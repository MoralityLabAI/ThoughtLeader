# ThoughtLeader recovery inventory

Inventory captured 2026-09-11 from `E:\Recovered_C_projects\Spiral_target\projects\ThoughtLeader` before its first Git commit.

## Recovery summary

- 107 files totaling 26.57 MiB, including generated previews, Python bytecode, and the damaged archive described below.
- Six episode-world build paths are present: the pilot plus episodes 2 through 6.
- The recovered source includes 28 Python files, 10 JavaScript files, 7 HTML files, 13 JSON files, and 21 image assets/previews.

## Six storyworlds

| World | Recovered build source | Quality report | Browser theater export |
| --- | --- | --- | --- |
| Pilot / episode 1 | `storyworld/build_pilot.py` | `storyworld/quality_report.json` | `frame-theater.html` |
| Episode 2 | `storyworld/build_ep2.py` | `storyworld/quality_report_ep2.json` | Not recovered as a root-level `frame-theater-ep2.html` file |
| Episode 3 | `storyworld/build_ep3.py` | `storyworld/quality_report_ep3.json` | `frame-theater-ep3.html` |
| Episode 4 | `storyworld/build_ep4.py` | `storyworld/quality_report_ep4.json` | `frame-theater-ep4.html` |
| Episode 5 | `storyworld/build_ep5.py` | `storyworld/quality_report_ep5.json` | `frame-theater-ep5.html` |
| Episode 6 | `storyworld/build_ep6.py` | `storyworld/quality_report_ep6.json` | `frame-theater-ep6.html` |

`storyworld/thought-leader-pilot.json` (4.05 MiB) is the only recovered full JSON world export. The episode 2–6 build scripts and quality reports are present, but separately exported episode 2–6 JSON worlds were not found in this recovery.

## Art and presentation assets

- Four reference images: `reference/kiriakou_ref.jpg`, `reference/michael_levin_ref.jpeg`, `reference/rotoscope_moodboard.webp`, and `reference/will_brown_ref.png`.
- Episode-specific sprite generators for episodes 2–6: `src/sprites_ep2.py` through `src/sprites_ep6.py`, plus the shared `src/sprites.py` and `src/roto.py`.
- Sprite manifests for episodes 4–6: `src/sprites-ep4.manifest.json`, `src/sprites-ep5.manifest.json`, and `src/sprites-ep6.manifest.json`.
- Generated sprite sheets, scene renders, and size/variant previews remain on disk but are intentionally ignored because the existing project rules identify them as regenerable review artifacts.

## Damaged and intentionally excluded material

- `thought-leader.zip` is 9.42 MiB, but its header is all zero bytes rather than a ZIP signature. It is a damaged recovery artifact and cannot be treated as a backup. SHA-256: `74727C16FAB843C2CB2175F7E4C7FBFAE84E9B2E8875BFFA29A535CB4764F313`.
- `.claude/settings.local.json` contains machine-local tool permissions and is ignored.
- Python bytecode, scratch JSON, and generated review images are ignored by the project’s `.gitignore`.
