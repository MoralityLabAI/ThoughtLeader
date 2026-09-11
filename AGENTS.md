# ThoughtLeader working guide

Active work is the rebuilt `season1/` directory. The older root `src/`, `storyworld/`, `docs/`, `reference/`, `build/` and theater HTML files are damaged recovery artifacts; do not use them as runnable source or silently overwrite them.

- Read `season1/AUTHORING_CONTRACT.md` before narrative or mechanics changes. The user's corrected episode order overrides the recovered run numbering.
- Edit `season1/authored/episode-*.json`, then run `python tools/build_season1.py`. `worlds/`, `scripts/` and `season-data.js` are generated exports.
- Use the GPTStoryworld storyworld-building skill when available; copied validation tools are in `tools/gptstoryworld/`. Preserve their provenance, and do not weaken upstream gates to manufacture a pass.
- Validate with `python tools/check_season1.py` and `node tools/rehearse_season1.cjs --runs 5000`. After reader changes, run `node tools/playtest_season1.cjs` with Playwright and inspect screenshots.
- Keep recovery sources, adapted prose, new writing and new mechanics distinguishable. Source logs are incomplete; do not claim exact restoration.
- Do not add a sinister twist to the finale's legitimate AI–human movement. Do not present the fake Kiriakou as the real man's conduct or generalize the Mahdi cult to Muslim belief.
- Art assets are real local PNGs. Preserve the prompts and checksums in `season1/assets/manifest.json`.
- World script execution follows the delivered browser reader. In particular, Nudge is clamped addition and belief pointers use the full keyring. The upstream Python rehearsal is diagnostic because its implementation is incomplete for this world profile.
