# Season 1 draft quality and limits

This is a compact, playable reconstruction draft, not exact restoration or production-polish certification. The six cases follow the author's corrected outline. Recovered prose, adaptations, new endings, new mechanics and new illustrations are identified in the source files and manifests.

## What the checks establish

- `draft-checks.json`: the six exports validate against the copied GPTStoryworld schema checker; each contains 18 authored scenes, a final filing scene and five endings. Source-to-export hashes and the exact offline bundle agree. All seven PNGs have valid checksums and decompressed image data.
- `season-rehearsal.json` and `episode-*-rehearsal.json`: 5,000 runs per case execute the **actual delivered JavaScript reader engine**, choosing uniformly among legal options and selecting its highest-scoring reaction. Reports include ending frequencies, reachable witness paths, reaction coverage, blocked final proposals and state ranges. These are sampled results under a declared random policy, not exhaustive proofs or predictions of human play.
- `browser-playtest.json` and `screenshots/`: browser integration checks exercise each case through 19 actual button choices, a pending-reaction save/reload/resume, the ending screen and persistent casebook finding. Images are decoded locally. Desktop and 390-pixel mobile layouts are checked; no external asset requests are permitted. Screenshots are reviewed separately for visual defects.
- `upstream-rehearsal.json` and `episode-*-upstream-rehearsal.txt`: retained output from the unmodified upstream Python rehearsal. These runs are diagnostic only. That simulator aliases belief keyrings, does not initialize character properties, leaves late-block counters unimplemented and detects secret scenes by a different ID prefix. Its printed “None reachable” secret result is not evidence that this season's `ending_kind: secret` endings cannot be reached.

The reports retain exact source/reader fingerprints so the evidence can be tied to a build. Re-run the checks after edits; old reports do not certify new prose or mechanics. After running both playtest commands, `python tools/check_season1.py --with-playtests` also verifies that their passing results match the current exports and reader. Rebuild first after a fresh checkout, since Git/platform line-ending conversion can change text-file byte hashes without changing the story.

## What remains below the upstream late-polish bar

Each `episode-*-upstream-quality.json` preserves the **unmodified failing result** from GPTStoryworld's stricter quality gate. This draft deliberately has three ordinary choices per scene and two reactions per choice, first-order rather than second-order beliefs, additive bounded effects, mostly ungated ordinary choices, fixed scene progression and no super-secret ending. It therefore misses that gate's density, p2-belief, operator-variety/complexity, encounter-acceptability and super-secret requirements. No thresholds were relaxed to turn those failures into passes.

The profile has eight case-record axes plus two actively used mutual-trust belief slots. Runtime initialization also creates unused default properties on the investigators. This is not a 40+-variable projection-tower world, an inference benchmark, or a strategic simulation. The coup exercises in episode 1 are fictional objects of investigation, not an operational coup simulator.

Choices change case statistics and state-dependent reactions, then rejoin the next scene. The final finding remains an explicit player decision; evidence, consent and mandate control access to its two conditional proposals. A proposal's availability does not prove that every earlier intervention succeeded. Remedy endings authorize future accountable work and retain the costs and limits of earlier choices.

The illustrations are one shared cast image and one key-art image per episode. They are not recovered original art, a complete scene-by-scene illustration set, animated actors, voice performances or a spritesheet collection. The reader reuses each case's key art throughout that case.

## Next editorial pass

Play the less-supported reactions and error findings as well as the cooperative path. Refine case-specific consequences before adding more state or widening branches. If moving beyond this draft, prioritize event-specific continuity flags, tested second-order beliefs, less repetitive final-filing structure, additional scene illustrations, keyboard/screen-reader review and participant playtests. Cross-episode stats currently reset intentionally; only the casebook's completed findings carry forward.

The finale remains a legitimate political movement in every branch. An investigator can mischaracterize it; the story does not validate that mistake with a hidden hostile-controller reveal.
