# ThoughtLeader recovery inventory

Inventory captured 2026-09-11 from `E:\Recovered_C_projects\Spiral_target\projects\ThoughtLeader`.

> **Recovery status: corrupted.** This directory preserves a valuable filename and directory inventory, but it does not preserve usable project content. The public repository is a forensic record of the recovery, not a runnable ThoughtLeader project.

## Byte-content audit

The original recovery contains 107 files totaling 26.57 MiB. A 4 KiB sample from both the beginning and end of every file found:

- 101 files totaling 26.52 MiB have zero-filled samples at both ends.
- This includes every recovered Python and JavaScript source file, every storyworld JSON file and quality report, all seven HTML files, all Markdown documentation, all reference art, the ZIP archive, and compiled Python files.
- The three generated PNG previews with non-zero samples (`src/actualsize-ep2.png`, `src/actualsize-ep5.png`, and `src/variants-ep2.png`) do not contain the required PNG signature, so they are also corrupt.
- The only valid text retained from the original dump is `.gitignore`, `.claude/settings.local.json`, and the ZIP `Zone.Identifier` provenance marker. The local Claude settings are intentionally ignored.

## Recovered project map

The following names establish what the original project *appears* to have contained, but their content is zero-filled and not usable:

| Apparent world | Build source | Quality report | Theater export |
| --- | --- | --- | --- |
| Pilot / episode 1 | `storyworld/build_pilot.py` | `storyworld/quality_report.json` | `frame-theater.html` |
| Episode 2 | `storyworld/build_ep2.py` | `storyworld/quality_report_ep2.json` | No root-level theater export found |
| Episode 3 | `storyworld/build_ep3.py` | `storyworld/quality_report_ep3.json` | `frame-theater-ep3.html` |
| Episode 4 | `storyworld/build_ep4.py` | `storyworld/quality_report_ep4.json` | `frame-theater-ep4.html` |
| Episode 5 | `storyworld/build_ep5.py` | `storyworld/quality_report_ep5.json` | `frame-theater-ep5.html` |
| Episode 6 | `storyworld/build_ep6.py` | `storyworld/quality_report_ep6.json` | `frame-theater-ep6.html` |

The file names indicate six intended storyworlds: the pilot and episodes 2 through 6. They do **not** establish that six complete storyworlds were recovered.

## Art and recovery leads

- The recovery retains names for four reference images and episode-specific sprite generation scripts, but their payloads are zero-filled.
- `thought-leader.zip` is also zero-filled. SHA-256: `74727C16FAB843C2CB2175F7E4C7FBFAE84E9B2E8875BFFA29A535CB4764F313`.
- Its attached `thought-leader.zip:Zone.Identifier` marker records that the archive was downloaded from a Claude conversation. This is the strongest lead for locating an intact original outside this damaged drive dump.

## Repository policy

The repository preserves the recovered file map and the original `.gitignore`. Local Claude permissions, Python bytecode, scratch data, the damaged ZIP, and regenerable preview images are not tracked. This inventory and the root README explain the corruption so the public repository is not mistaken for a working release.
