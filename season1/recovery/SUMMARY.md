# Surviving ThoughtLeader prose

The original drive dump is damaged, but the existing GPTStoryworld checkout retained intact playtest logs. `tools/extract_season_sources.py` extracts only authored scene/option/reaction prose and its provenance. It omits agent reasoning and private absolute paths.

1,639 observations yielded **469 distinct scene records**, 743 visible options and recovered reaction text for 515 options. Corrected runs supply 439 scene records; 30 additional scenes come from diagnostic runs and are explicitly marked. Source paths and SHA-256 values accompany every episode file. Scene titles are navigation labels derived from IDs where original titles were unavailable.

| Recovered episode | Source title | Scenes | Use in rebuilt season |
| --- | --- | ---: | --- |
| 1 | The Halcyon Interim | 33 | Motifs and investigative material support the author's student-simulation pilot. |
| 2 | The Last Mile | 66 | Gig-economy case, episode 2. |
| 3 | Guided | 104 | Mahdi-cult case, episode 3. |
| 4 | Good Standing | 79 | Organized-crime case, moved to episode 5. |
| 5 | The Substitute | 86 | Preserved as source history; omitted from the revised season. |
| 6 | The Movement | 101 | Legitimate AI–human movement, episode 6. |

The log corpus does not reconstruct hidden choices, unvisited branches, full formulas, exact initial state, original terminal prose or images. Earlier diagnostic effect summaries also confuse assignments and multiplication with addition. Their numbers must not be treated as recovered state-transition formulas.

The new drafts are adaptations and new writing. The incel-forum episode is newly authored from the user's brief. New option effects, reaction formulas, finding gates, ending prose and art are explicitly identified in the authored source, world metadata and art manifest.

Re-extract when an intact checkout with the run artifacts is available:

```text
python tools/extract_season_sources.py --source-repo PATH_TO_GPTSTORYWORLD
```

Source repository: https://github.com/MoralityLabAI/GPTStoryworld . The local checkout's HEAD was `9a8ef1d3a78f8de0d53868259edf62b44986f854`; it also held local uncommitted work and run artifacts. A fresh clone may not contain those run files. The extracted scene records committed here preserve the usable prose without requiring that local run archive.
