# Restored pixel theater

This is the active Season 1 art direction, restored from the Claude-era ThoughtLeader prototype in `patrickdugan/ThoughtLeader` at commit `c8136095bb08e4b8a512560c8ca47e18b61f36b5`.

The intact copy was found in an earlier clean recovery checkout, not the damaged E-drive project. Its original files are preserved under [recovery/original-pilot](../../recovery/original-pilot/). The [original character sheet](../../recovery/original-pilot/character-sheet.html) and [original pilot theater](../../recovery/original-pilot/frame-theater.html) remain playable and unchanged. Their dialogue and mechanics are historical versions, separate from the rebuilt season.

## Restored unchanged

- 48×56 indexed portraits: Voidt, Lamport, Marsh, Aldunate, the fake Kiriakou persona, the model interface, Will and the work-in-progress Levin portrait.
- Palette, eye and mouth patches, sprite authoring source, and rotoscope source/payload.
- Original 320×180 office, anteroom, corridor and datacenter painters. `legacy-scenes.js` wraps their original code for reuse; line endings are normalized, but painter logic is unchanged.

The active season displays the original Voidt and Lamport sprites with subtle blinking. The fake recruitment persona appears inside episode 1's screen, explicitly as fiction. Archived cameo portraits do not introduce those people into the new season's scenes.

## New extrapolation

Six native 320×180 settings extend the original procedural canvas style: campus classroom, gig-dispatch room, community meeting room overlooking the fairground, forum room, harbor interview office and civic assembly room. The final room is an ordinary legitimate member-run space, not a sinister AI headquarters.

These are **new pixel scene painters**, not recovered episode 2–6 backgrounds and not a pixelation filter applied to the noir art. Each case currently uses one tableau throughout its scenes. `pixel-stage.js` is the editable source; the reader combines these rooms with the recovered portraits. More location-specific rooms, NPC sprites and walking animations remain possible future work.

Seven PNG exports are rendered at 1280×720 from the native 320×180 canvas using nearest-neighbor 4× scaling. The cast card composes recovered portraits over the recovered office. The six episode cards are the new settings. [manifest.json](manifest.json) records file hashes, dimensions and original-source hashes. [gallery.html](gallery.html) shows the collection.

Rebuild from the repository root using Node.js and Playwright:

```text
node tools/build_pixel_art.cjs
python tools/build_season1.py
python tools/check_season1.py
```

The renderer defaults to installed Microsoft Edge; set `PLAYWRIGHT_CHANNEL=chrome` to use Chrome. No model, image-generation service, account, API key or image-editing pipeline is used. This restores and extends an editable code-native asset system. The prior generated noir images remain one directory above as superseded concept art, with their original prompts and provenance intact.
