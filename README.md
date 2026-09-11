# Thought Leader · Season One

Six playable investigative storyworld drafts starring Agents Kaitlyn Voidt and Dudley Lamport of the Bureau for Emerging Threats. Built with the GPTStoryworld storyworld-building skill, surviving playtest prose, and the author's corrected Season 1 outline.

**Play locally:** download or clone this repository and open [season1/storyworld_reader.html](season1/storyworld_reader.html) in a browser. The reader includes all six episodes and local illustrations; it needs no account, server or network. GitHub's file viewer displays HTML source rather than executing the game.

| Episode | Case |
| --- | --- |
| 1 · The Interim | A fake John Kiriakou recruits students into coup simulations. |
| 2 · The Last Mile | Gig-economy dispatch turns ordinary work into distributed harm. |
| 3 · Guided | Agents investigate exploitative Mahdi cult recruitment with the affected community. |
| 4 · The Reply Guys | A monster-of-the-week case follows incel forums and synthetic confidants. |
| 5 · Good Standing | Organized crime and the government's own feedback loop collide. |
| 6 · The Movement | A legitimate political movement exercises revocable human authority alongside AI coordination. |

[Season guide and draft scripts](season1/README.md) · [Restored pixel art](season1/assets/pixel/README.md) · [Original pilot recovery](season1/recovery/ORIGINAL_PILOT_RECOVERY.md)

![Restored pixel portraits of Voidt and Lamport](season1/assets/pixel/cast.png)

Each episode has 18 substantive decision scenes, one final filing decision and five endings. The season includes six ordered SweepWeave JSON exports, editable author source, readable scripts/SWMD, an offline pixel-theater reader, six new pixel settings, and the recovered original portrait system. These are narrative drafts, not a claim of production-polish certification.

Rebuild and check from the repository root:

```text
python tools/build_season1.py
python tools/check_season1.py
node tools/rehearse_season1.cjs --runs 5000
```

Python 3.10+ and Node.js 18+ are sufficient. On Windows, `py -3` may replace `python`. The optional Playwright browser tests and validation evidence are described in the [season guide](season1/README.md).

The original C-drive recovery remains in the older root directories and is corrupt. Later discovery of intact GPTStoryworld playtest logs recovered 469 scenes of prose. A subsequent search found an intact earlier ThoughtLeader checkout containing the original pilot, pixel portraits and theater renderer; those files are now preserved unchanged under `season1/recovery/original-pilot/`. [RECOVERY_INVENTORY.md](RECOVERY_INVENTORY.md) records both discoveries. The six-case season is still a reconstruction, not a byte-for-byte restoration of the later lost project.
