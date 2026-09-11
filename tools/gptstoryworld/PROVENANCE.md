# GPTStoryworld tools

Copied from the existing MoralityLabAI/GPTStoryworld working checkout on 2026-09-11. Its HEAD is `9a8ef1d3a78f8de0d53868259edf62b44986f854`, and it includes pre-existing local changes to the skill and some tools. The copies preserve those working versions; file hashes in `source-hashes.json` identify exactly what was used. The source checkout was not changed.

Upstream: https://github.com/MoralityLabAI/GPTStoryworld

The Python files in this directory are unmodified copies of `codex-skills/storyworld-building/scripts/`. The reader in `season1/storyworld_reader.html` originates in the same checkout's root `storyworld_reader.html`; its season catalog, local assets, accessibility and small state display are project adaptations.

Applied skill: `codex-skills/storyworld-building/SKILL.md`. Read references: projection-tower, production quality, first-order beliefs, new encounter and Monte Carlo balancing. The requested compact season draft uses eight case axes and two active belief slots. It makes no projection-tower benchmark or high-dimensional inference claims.

The checked-in upstream browser reader implements `Nudge` as clamped addition even though the prose format guide describes asymptotic nudging. This season follows the executable reader semantics. Upstream Python rehearsal aliases multi-element belief keyrings and omits initial state; its runs are retained as diagnostics. The authoritative season rehearsal executes the actual browser engine with full keyrings and character initialization.

The upstream quality gate is a late-polish profile (including p2 beliefs, dense effects, and formula complexity). Its raw reports are delivered without changing thresholds. Passing the season's separate draft checks is not a claim that the late-polish gate passes.
