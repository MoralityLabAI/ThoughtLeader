# Thought Leader · Season One

A playable reconstruction draft following the author's corrected six-case order. Kaitlyn Voidt and Dudley Lamport investigate an ecology of human and machine influence from inside the Bureau for Emerging Threats.

Open **[storyworld_reader.html](storyworld_reader.html)** in a browser. No server, account, API key or internet connection is needed. Choose a case, read a scene, choose an action and continue through its consequence. The reader saves the current case and completed findings in local browser storage. Each episode starts with neutral case statistics; the casebook preserves findings without implying mechanical continuity between cases.

| Episode | Case | Draft | Art |
| --- | --- | --- | --- |
| 1 | The Interim — a fake John Kiriakou recruits students into coup simulations | [Script](scripts/episode-01.md) · [World](worlds/episode-01.json) | [Pixel setting](assets/pixel/ep01.png) |
| 2 | The Last Mile — gig-economy dispatch and the death of labor organizer Mari Duarte | [Script](scripts/episode-02.md) · [World](worlds/episode-02.json) | [Pixel setting](assets/pixel/ep02.png) |
| 3 | Guided — Mahdi cults, truthful messages and engineered guidance | [Script](scripts/episode-03.md) · [World](worlds/episode-03.json) | [Pixel setting](assets/pixel/ep03.png) |
| 4 | The Reply Guys — incel forums, grievance and synthetic confidants | [Script](scripts/episode-04.md) · [World](worlds/episode-04.json) | [Pixel setting](assets/pixel/ep04.png) |
| 5 | Good Standing — organized crime and an institutional feedback loop | [Script](scripts/episode-05.md) · [World](worlds/episode-05.json) | [Pixel setting](assets/pixel/ep05.png) |
| 6 | The Movement — legitimate collaboration between human members and CHORUS | [Script](scripts/episode-06.md) · [World](worlds/episode-06.json) | [Pixel setting](assets/pixel/ep06.png) |

Each episode contains 18 substantial scenes in three acts, three choices per scene and two state-dependent reactions per choice. A final filing decision offers five endings; evidentiary and authorization gates control the bounded finding and joint remedy. The other findings remain available because investigators can overclaim, dismiss coordination, or name what remains unresolved. The active reader uses an episode-level pixel setting and the original animated portrait grids. Walking characters, bespoke art for every scene, voice acting and a strategic campaign simulator remain outside this draft.

The dramatic commitment is epistemic honesty with consequences. Voidt attends to organized patterns and interiority without inventing certainty; Lamport demands provenance without reducing coordinated harms to coincidence. The finale's lawful AI–human political movement is legitimate. An investigator's bad finding does not turn it into a covert conspiracy.

## Source and reconstruction

The damaged C-drive files remain elsewhere in the repository. The new work is supported by 469 scene records recovered from intact GPTStoryworld playtest logs, plus the older concept note and the author's corrected episode order. [recovery/SUMMARY.md](recovery/SUMMARY.md) records the source archive. Those records preserve only observed prose and chosen reactions; their numerical diaries cannot restore the lost original formulas.

The new story source of truth is [authored/](authored/). Rebuilt mechanics, connective prose and endings are explicitly new. A subsequent recovery also located the intact original pilot and pixel-art system: see [original-pilot recovery](recovery/ORIGINAL_PILOT_RECOVERY.md). The active portraits are restored, while the six current settings extend their native style. Episode 5 adapts recovered episode 4; recovered episode 5, *The Substitute*, is retained only as source history. Episode 4 is new writing. [AUTHORING_CONTRACT.md](AUTHORING_CONTRACT.md) records these decisions.

The requested [GPTStoryworld building skill](https://github.com/MoralityLabAI/GPTStoryworld/tree/main/codex-skills/storyworld-building) supplies the schema, scaffold and validation tools. The local checkout includes pre-existing edits; [tool provenance](../tools/gptstoryworld/PROVENANCE.md) and exact hashes identify the working versions used.

## Rebuild and verification

Requires Python 3.10+ and Node.js 18+; no Python packages are required.

```text
python tools/build_season1.py
python tools/check_season1.py
node tools/rehearse_season1.cjs --runs 5000 --seed 20260911
python tools/upstream_rehearsal_season1.py --runs 5000 --seed 20260911
```

Run those commands from the repository root. On Windows, `py -3` can replace `python`. The builder exports ordered SweepWeave JSON, readable Markdown, SWMD, the offline catalog and upstream quality reports. The draft checker detects stale exports and malformed PNGs. Rehearsal executes the same JavaScript engine used in the reader, including full belief keyrings and initial state.

Optional browser integration tests use Playwright (`npm install`, then `npx playwright install chromium`, then `npm run test:browser`). `PLAYWRIGHT_CHANNEL=msedge` or `chrome` uses an existing browser installation instead. Browser tests exercise actual choice buttons, save/resume, all six case endings, local images and mobile layout. Reports and screenshots are in [reports/](reports/).

The upstream late-polish gate is stricter than this compact narrative draft. Its raw failure list remains visible in each `*-upstream-quality.json`; no projection-tower, second-order-belief, or production-balance certification is implied. [reports/QUALITY_NOTES.md](reports/QUALITY_NOTES.md) explains the resulting scope and evidence.

## Art

The [pixel-art guide](assets/pixel/README.md) and [gallery](assets/pixel/gallery.html) show the restored Claude-era portraits and six newly authored 320×180 environments. The live reader preserves crisp pixels, subtle blinking and reduced-motion support. Seven local PNG cards are exported at nearest-neighbor 4× size. Rebuild art with `node tools/build_pixel_art.cjs` before running the season compiler; this requires the optional Playwright dependency and an installed browser. It uses native canvas drawing, not an image-generation service. The former noir illustrations remain archived in `assets/` with their generation prompts; they are no longer the default.
