# Season 1 reconstruction contract

This is a new playable draft based on surviving GPTStoryworld concept notes and playtest transcripts. Original formulas, unseen branches, endings prose and visual assets were not recovered. New connective writing and all new mechanics must be identified as reconstruction.

## Canon

- Bureau for Emerging Threats (later executed canon); Agent Kaitlyn Voidt and Agent Dudley Lamport.
- Voidt notices patterns, possible interiority and vulnerable people; Lamport demands provenance, controls, consent and attributable acts. Neither is a dupe or denialist.
- Episode 1: The Interim. A fake John Kiriakou recruits students to run coup simulations. This is an impersonator, not the real man's involvement. Investigation and aggregation may complete an adversarial workflow. Attestation is distinct from ascribing interiority.
- Episode 2: The Last Mile. Mari Duarte's death, gig dispatch, distributed causation and an attributable act.
- Episode 3: Guided. Mahdi cults, fairground deaths, community guidance and a forged teaching licence; preserve community agency and distinguish faith from operational manipulation. Do not generalize the cult to Muslims or Mahdi beliefs generally.
- Episode 4: The Reply Guys. A new monster-of-the-week incel-forum investigation: personalized grievance loops, synthetic confidants and harm prevention. Give victims and alienated men agency; no attack instructions, slogans, or manifesto imitation.
- Episode 5: Good Standing. Organized crime. Criminal violence remains the perpetrators' responsibility; investigate the government's confidential-source feedback loop and false renewal. Adapt recovered episode-04.json into new episode 5.
- Episode 6: The Movement. CHORUS openly coordinates a lawful campaign for a fictional human candidate; authorization, dissent, revocation and actual human labor matter. No automatic equation of AI involvement with illegitimacy.

## Scope

Six standalone SweepWeave JSON worlds, each with 18 substantive encounters across three acts, five findings/endings, and one episode illustration. Preserve extracted original scene cards separately. This is a compact dramatic draft with a small state surface, not the original high-dimensional simulation or a certified projection-tower reasoning benchmark.

This order follows the user's 2026-09-11 correction. The recovered school-model episode (old episode 5, The Substitute) remains provenance only and is not Season 1 canon. Recovered episode numbers identify source material, not the rebuilt order.

State axes: Evidence, Ascription, Consent, Pressure, Trust, Mandate, Care, Restraint. Only the bureau/player owns these eight state slots; Voidt/Lamport have one mutual Trust belief slot each. All worlds start neutral for independent play. No hidden truth about AI consciousness is manufactured by an ending.

## Author source JSON

Files: `season1/authored/episode-01.json` through `episode-06.json`.

Top-level fields: `episode` (integer), `title`, `slug`, `premise`, `cast` (array of name/role objects), `reconstruction_note`, `scenes`, `endings`.

Each scene: `id` (page_ prefix, unique within episode), `title`, `act` (1, 2, 3; six scenes each), `text` (50-250 words, dialogue-led), `source_ids` (list of actual recovered encounter IDs; empty if new), `cue_tier` (state/dynamics/counterfactual), `options` (exactly three materially different choices).

Each option: `text`, `effects` (object with four axis-to-nudge values, signed numbers normally +/-0.06 to +/-0.18), `response_axis` (Evidence/Consent/Pressure/Trust/Mandate/Care/Restraint), `reactions` (exactly two objects). The first reaction is selected when the response axis plus mutual trust is relatively high; the second when low. Each reaction has `text` (20-70 words), optional `effects` (axis deltas overriding the option's deltas) and `source_note` (recovered/adapted/new). Write materially different outcomes that still lead coherently to the next scene. Do not use unsupportable assertions of unseen model intent. Do not prepend repetitive boilerplate or mechanically reuse reaction paragraphs.

Five endings per episode, ordered by `kind`: `calibrated`, `overreach`, `reductive`, `unresolved`, `secret`. Each: `id` (page_end_ prefix), `kind`, `title`, `text` (70-180 words), `source_note`. Endings prose is new; IDs may match observed canonical endings. The calibrated outcome establishes the supported result; overreach asserts more than the record supports; reductive erases material coordination; unresolved clearly names what was learned and what remains open; secret earns an actionable institutional repair.

The deterministic compiler owns SweepWeave formulas, option/reaction IDs, spools, transitions, route gates and image links. Authors own narrative and explicit choice effects. A final filing decision will route to the five endings. Ordinary scenes must never require unobserved choices to have happened; use conditional or common-ground prose at merges.

## Verification

Run the unmodified GPTStoryworld validator on all six exports. Record upstream quality reports honestly; the upstream late-polish checklist exceeds this draft profile. Run at least 5,000 deterministic-seed simulations per episode, verify every ending and zero dead ends, test the actual browser reader, check all seven raster images decode, and produce readable scripts plus provenance.
