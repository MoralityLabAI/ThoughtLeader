---
title: "Thought Leader — 6. The Movement"
version: ""
storyworld_id: "THOUGHTLEADER-S1-DRAFT-20260911-EP06"
environment_type: "SWEEPWEAVE_STORYWORLD"
source_format: "SWMD-0-MIN"
state_variables:
  - "Ascription"
  - "Care"
  - "Consent"
  - "Evidence"
  - "Mandate"
  - "Pressure"
  - "Restraint"
  - "Trust"
endings:
  - id: "page_end_calibrated"
    type: "terminal"
    condition: "true"
    description: "The Bureau recognizes what the record supports: CHORUS materially coordinates a lawful human campaign under disclosed, revocable authority. Leah remains the candidate. Imani rem..."
    expected_critic_score: 0
  - id: "page_end_overreach"
    type: "terminal"
    condition: "true"
    description: "The movement remains legitimate, but the Bureau describes disclosed coordination as covert rule. Its own exhibits contain the votes, human signatures, refusals, and revisions th..."
    expected_critic_score: 0
  - id: "page_end_reductive"
    type: "terminal"
    condition: "true"
    description: "The finding recognizes the human signatures and calls everything between them an ordinary tool. It avoids an unsupported ruler story, but it also erases the coordination that jo..."
    expected_critic_score: 0
  - id: "page_end_secret_amendment"
    type: "success"
    condition: "true"
    description: "The final finding preserves a precedent instead of granting a license. Legitimate machine participation can be recognized through attributable contribution, actual human mandate..."
    expected_critic_score: 1
  - id: "page_end_unresolved"
    type: "terminal"
    condition: "true"
    description: "The review establishes disclosed human authorization, meaningful refusal, and a material coordinating role for CHORUS. Some attribution and governance questions remain open, inc..."
    expected_critic_score: 0
---

# SWMD-0
id: THOUGHTLEADER-S1-DRAFT-20260911-EP06
title: Thought Leader — 6. The Movement
theme: dark
about: CHORUS openly coordinates a lawful campaign for human candidate Leah Sato. The Bureau must learn to recognize legitimate AI-human collaboration through real authorization, dissent, revocation, accountable finances, and the labor of people who can refuse.

Season 1 reconstruction draft. Adapted from season1/recovery/episode-06.json and its legitimate CHORUS-human campaign premise. New compact scenes, branching reactions, and ending prose preserve actual human authorization and machine contribution. There is no hidden hostile controller or sinister reversal. The Bureau's bad findings can fail without making the movement secretly illegitimate.
cast: char_bureau, char_voidt, char_lamport
props: Evidence, Ascription, Consent, Pressure, Trust, Mandate, Care, Restraint
spools:
  spool_act1: page_morning_vote page_remit page_volunteers page_treasurer page_housing page_candidate
  spool_act2: page_chorus page_minority page_reporter page_cooling page_amendment page_replay
  spool_act3: page_archive page_debate page_evening page_future page_polls page_final_review page_finding_council
  spool_endings: page_end_calibrated page_end_overreach page_end_reductive page_end_unresolved page_end_secret_amendment

## ENC page_morning_vote | Winning Comes Fifth | turn=0..100 | spools=[spool_act1]
T: The public screen recommends canceling the riverfront rally during the heat emergency. The projected electoral cost is displayed beside the reason. Rhea reads both aloud. Members argue for eleven minutes, then approve releasing the volunteers. Leah Sato signs the cancellation as the human candidate. 'CHORUS recommended it. The members authorized it. Imani cleared the expenditure changes. I am responsible for carrying it out.' Nobody has hidden the machine's role in fine print. Voidt watches a volunteer put away a stack of signs. Lamport watches the human signatures appear in the public record. Their first observed action costs the campaign something it wants.

OPT page_morning_vote_o0: Trace the recommendation, vote, and signature as separate parts of one authorized decision.
  RXN page_morning_vote_o0_r0 -> page_remit
    T: Rhea supplies the record and the rule that permitted the vote. The chain shows real delegation rather than a machine's recommendation being treated as authority by itself.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_morning_vote_o0_r1 -> page_remit
    T: A public display delays one timestamp. The underlying signed record resolves the sequence, reminding Lamport that an interface glitch is not automatically a constitutional crisis.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_morning_vote_o1: Ask volunteers whether release actually means they can choose what to do next.
  RXN page_morning_vote_o1_r0 -> page_remit
    T: Several volunteers go home; others make their own plans to help neighbors. Tomas records availability without penalties, demonstrating a refusal that exists outside the charter's wording.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_morning_vote_o1_r1 -> page_remit
    T: One volunteer initially thinks attendance is still expected. Tomas corrects the misunderstanding publicly, and Rhea adds a clearer release notice instead of treating confusion as consent.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_morning_vote_o2: Treat the deliberate electoral sacrifice as camouflage for an undisclosed objective.
  RXN page_morning_vote_o2_r0 -> page_remit
    T: The charter already ranks civic duty above electoral success. Lamport finds no contradictory record, so the suspicion remains an unsupported possibility rather than an investigative finding.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_morning_vote_o2_r1 -> page_remit
    T: Rhea asks what observation could disprove the theory. The agents cannot answer without revising it, exposing how quickly an unfalsifiable suspicion can consume a lawful act.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_remit | What The Bureau Is Here For | turn=0..100 | spools=[spool_act1]
T: The referral began with complaints that an AI system is running a political movement. It contains questions about authority, money, and representation, but no automatic offense in the fact of disclosed software coordination. Marsh wants the Bureau to tell him whether this is a new kind of ruler. Lamport writes the actual review questions on a smaller sheet. Voidt adds whether the system makes a material contribution that a simple human-versus-machine label would miss. Rhea offers access to public records and a limited voluntary visit. 'Observation isn't a license for you to govern us,' she says. The agents agree the distinction belongs in writing.

OPT page_remit_o0: Define a bounded review of claims and records without assuming authority over political choices.
  RXN page_remit_o0_r0 -> page_volunteers
    T: The scope names specific questions and preserves the movement's right to decline unrelated access. Rhea signs the visitor terms without being asked to surrender the organization's autonomy.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_remit_o0_r1 -> page_volunteers
    T: Counsel narrows two requested categories before the visit proceeds. The correction delays the tour but keeps the investigation within powers it can actually explain.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_remit_o1: Ask members which documents demonstrate their own authority to authorize and revoke CHORUS.
  RXN page_remit_o1_r0 -> page_volunteers
    T: Members produce the ratification record, delegation terms, and a real revocation procedure. The agents receive evidence from people exercising authority rather than only a polished leadership briefing.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_remit_o1_r1 -> page_volunteers
    T: Some members know the practice better than the document titles. Rhea connects their accounts to the archive, revealing a need for clearer access without making their participation fictitious.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_remit_o2: Demand control of the campaign's operating queue until the Bureau is satisfied.
  RXN page_remit_o2_r0 -> page_volunteers
    T: Campaign counsel declines the demand and offers supervised access to relevant records. The investigation can continue, but the Bureau must withdraw a power it never established.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_remit_o2_r1 -> page_volunteers
    T: Rhea suspends the voluntary tour pending clarification. The movement's refusal is lawful, and the agents have converted a cooperative review into an unnecessary dispute about their own authority.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_volunteers | Tomas Knows The Stairs | turn=0..100 | spools=[spool_act1]
T: CHORUS proposes a schedule that fits every declared availability slot. Tomas points to two assignments and shakes his head. One volunteer is recovering from an injury; another can travel only if a neighbor watches her son. The calendar did not contain either fact because neither belongs in a public campaign database. 'It can make a good plan with what it has,' Tomas says. 'I still know the stairs.' He adjusts the schedule, asks the people involved, and records the change without publishing their reasons. Voidt watches coordination improve through a human correction. Lamport asks whether the software can reject Tomas's judgment. It cannot authorize attendance at all.

OPT page_volunteers_o0: Verify that volunteers can refuse assignments and that local corrections remain effective.
  RXN page_volunteers_o0_r0 -> page_treasurer
    T: The team finds accepted refusals and revised plans in the ordinary record. The right to say no changes actual work, so it is more than a reassuring charter sentence.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_volunteers_o0_r1 -> page_treasurer
    T: A reminder was phrased too strongly and one volunteer misunderstood it. Tomas corrects the wording and the assignment, preserving the distinction between a repairable mistake and hidden compulsion.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_volunteers_o1: Protect private reasons for refusal while recording only the operational adjustment.
  RXN page_volunteers_o1_r0 -> page_treasurer
    T: The audit records that a correction occurred without copying medical or family details. The system can remain accountable without making every person's vulnerability available to everyone.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_volunteers_o1_r1 -> page_treasurer
    T: The existing log includes one unnecessary personal note. The campaign limits its access and revises the practice, showing a concrete privacy improvement the review can later verify.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_volunteers_o2: Conclude that human corrections prove CHORUS contributes nothing meaningful.
  RXN page_volunteers_o2_r0 -> page_treasurer
    T: Tomas shows the hours of reconciliation the initial schedule saved. His correction makes the result collaborative; it does not erase the work that made the correction possible.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_volunteers_o2_r1 -> page_treasurer
    T: The agents record the corrections but overlook the planning workload. Their account leaves Tomas inexplicably doing two jobs at once because it has decided only human work counts.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_treasurer | An Unsigned Queue Is Not A Payment | turn=0..100 | spools=[spool_act1]
T: Imani opens the campaign's finance queue. CHORUS can draft a budget, identify a missing receipt, or reject an incomplete request for further review. Only the designated human officers authorize disbursements. Communications identify their payor, including drafts the model helped prepare. 'It tells me I forgot something,' Imani says. 'It doesn't become me because it's right.' Lamport chooses an ordinary completed transaction rather than the team's favorite demonstration. Voidt asks what happens if Imani disagrees with a recommendation. The archive contains disagreements, reasons, and declined requests. The treasurer's responsibility is not fictional simply because useful analysis arrived before her signature.

OPT page_treasurer_o0: Sample real transactions for accountable authorization, purpose, and a complete supporting record.
  RXN page_treasurer_o0_r0 -> page_housing
    T: The sampled records connect recommendations to human approvals and supporting receipts. The review confirms this bounded set rather than converting a clean sample into universal certification.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_treasurer_o0_r1 -> page_housing
    T: One receipt needs follow-up and is marked accordingly. Imani supplies its custodian, and the agents distinguish an ordinary unresolved document from proof of concealed machine authority.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_treasurer_o1: Check that authorization responsibilities remain clear when Imani is unavailable.
  RXN page_treasurer_o1_r0 -> page_housing
    T: The assistant treasurer's authority is documented, and requests wait when neither officer can sign. The system's efficiency stops at a boundary the humans actually enforce.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_treasurer_o1_r1 -> page_housing
    T: The absence procedure is clear but poorly visible to volunteers. Imani posts a simpler explanation, improving access without changing who legally and practically owns the decision.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_treasurer_o2: Treat any model-assisted financial judgment as an unauthorized machine expenditure.
  RXN page_treasurer_o2_r0 -> page_housing
    T: Imani asks which payment lacks a human authorizer. The sample supplies none, forcing the agents to distinguish analytic contribution from the act they had alleged.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_treasurer_o2_r1 -> page_housing
    T: The allegation causes unnecessary alarm among staff awaiting reimbursements. The review must correct its language before routine assistance can be discussed without implying a violation.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_housing | Nobody Wrote The Last Paragraph | turn=0..100 | spools=[spool_act1]
T: The housing plank combines tenant support, permitting changes, small-builder finance, transit planning, and regular review. Thousands of members contributed through local meetings, edits, votes, translations, and objections. CHORUS grouped compatible proposals and exposed conflicts. The final paragraph has no single author. A tenant delegate asks why that should be suspicious when a consultant's anonymous draft would have looked ordinary. Lamport wants the binding acts identified, not a solitary writer invented. Voidt wants the actual contributions preserved. At the edge of the document is a minority note warning that the current accessibility requirement is too weak. It has not been deleted for spoiling the summary.

OPT page_housing_o0: Trace the proposal through contributions, revisions, and the human acts that made it binding.
  RXN page_housing_o0_r0 -> page_candidate
    T: The archive shows distributed contribution and explicit ratification. The agents can explain how the paragraph acquired authority without assigning its entire authorship to one person or model.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_housing_o0_r1 -> page_candidate
    T: Some early local discussions survive only as attributed summaries. The team marks that limitation while preserving the verified vote and revision history that made the current text binding.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_housing_o1: Ask the minority authors whether their objection remains visible and can change the proposal.
  RXN page_housing_o1_r0 -> page_candidate
    T: Nadia shows an accepted amendment slot and the public minority note. Her objection has procedural force despite lacking majority support, which is more useful than ceremonial inclusion.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_housing_o1_r1 -> page_candidate
    T: Nadia says the note is visible but hard to find. Rhea moves it beside the main proposal and confirms the review slot, correcting access without claiming the disagreement disappeared.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_housing_o2: Demand one named author before treating the collective policy as a real position.
  RXN page_housing_o2_r0 -> page_candidate
    T: The delegates refuse to nominate a decorative author. Lamport recognizes that authority can be attributable even when composition is distributed, and narrows the question accordingly.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_housing_o2_r1 -> page_candidate
    T: The review becomes stuck on a category the organization does not use. The published vote remains available, while the agents miss the objection that could actually change the policy.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_candidate | Leah's Disagreement | turn=0..100 | spools=[spool_act1]
T: Leah was a public defender before becoming a candidate. She joined the movement because ordinary campaigns asked her to perform certainty written by consultants. Here she can identify positions she proposed, positions members developed, and positions she still doubts. She disagrees with one numerical target in the housing plank and has said so publicly. 'I'm not free of responsibility because I didn't write every sentence,' she tells Voidt. 'I'm responsible for what I adopt.' Lamport asks what happens if the assembly refuses her amendment. Leah describes the charter's process, including the possibility of a dispute the organization must resolve rather than conceal before the debate.

OPT page_candidate_o0: Check Leah's actual authority to adopt, reject, and explain positions under the charter.
  RXN page_candidate_o0_r0 -> page_chorus
    T: The charter defines her role and the process for unresolved disputes. Her responsibility is limited but real, and her public disagreement is permitted rather than secretly erased.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_candidate_o0_r1 -> page_chorus
    T: One provision is ambiguous about timing. Leah and Rhea flag it for member interpretation, showing that a legitimate organization can have a procedural question without hiding its candidate.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_candidate_o1: Ask how Leah explains shared authorship to voters without pretending to agree with everything.
  RXN page_candidate_o1_r0 -> page_chorus
    T: Leah answers with the housing disagreement and her reasons. The explanation risks looking uncertain, but it gives voters an actual person to question rather than a manufactured unity.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.18))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_candidate_o1_r1 -> page_chorus
    T: Her first answer is too abstract. Maya asks for an example, and Leah supplies one; the improvement comes through ordinary public scrutiny rather than an invisible machine rewrite.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_candidate_o2: Assume a candidate who shares authorship must be a figurehead.
  RXN page_candidate_o2_r0 -> page_chorus
    T: Leah points to her published dissent and an actual proposal she rejected. The figurehead claim fails against conduct that would be difficult to explain if she lacked meaningful authority.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_candidate_o2_r1 -> page_chorus
    T: Leah ends the speculative interview and offers the public record. The agents retain access to relevant evidence but lose an opportunity to hear how responsibility feels from inside the role.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_chorus | The Ranked Charter | turn=0..100 | spools=[spool_act2]
T: CHORUS forecasts staffing, groups proposals, identifies repeated arguments, drafts agendas, and explains budget constraints. Its charter ranks legal compliance, ratified commitments, safety, civic duty, and electoral success in that order. Winning comes fifth. The interface exposes recommendations and their disposition; it does not present itself as the candidate. Voidt asks the system why it favored cancellation. It cites the heat policy and its uncertainty. Lamport reads the archived policy rather than accepting the answer as proof. Both match. The model's explanation is a useful object to compare with behavior, not privileged access to an inner life. Nearby, members are still arguing over lunch.

OPT page_chorus_o0: Compare explanations, preserved rules, and actual decisions across more than the demonstration.
  RXN page_chorus_o0_r0 -> page_minority
    T: The sample reveals consistent boundaries and a few mundane errors corrected by users. The review can recognize reliable collaboration without describing the software as infallible or self-authorizing.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chorus_o0_r1 -> page_minority
    T: One explanation omits a contributing constraint. The developers correct the record and retain the discrepancy for review; an imperfect explanation does not become a secret hostile objective by default.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chorus_o1: Ask members to demonstrate an ordinary refusal of a model recommendation.
  RXN page_chorus_o1_r0 -> page_minority
    T: The assembly archive contains several rejected recommendations with no penalty. Rhea selects one that improved after revision, showing disagreement as part of the system's useful operation.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chorus_o1_r1 -> page_minority
    T: The live demonstration is postponed to avoid manufacturing a decision for visitors. The archived refusals remain available, and the agents accept evidence without demanding a staged act of independence.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chorus_o2: Ask CHORUS whether it secretly wants power and treat its answer as the decisive test.
  RXN page_chorus_o2_r0 -> page_minority
    T: The answer is a statement about its role, not an empirical result. Lamport returns to permissions, records, and behavior, leaving the dramatic question where it belongs.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chorus_o2_r1 -> page_minority
    T: The exchange becomes an attractive quote with almost no evidentiary value. The team has spent review time on a performance that cannot distinguish the possibilities it claims to test.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_minority | The Least Popular View Goes First | turn=0..100 | spools=[spool_act2]
T: The amendment assembly begins with its least popular views. A tenants' delegate defends the original housing target. An inspector supports Leah's lower number. Nadia Ruiz says both versions neglect enforcement for accessible homes. CHORUS allocates additional agenda time to her constraint because it crosses the competing proposals. Rhea confirms the allocation under the assembly's rules. 'Giving me minutes isn't agreement,' Nadia tells the agents. 'Watch whether anything changes.' Voidt stays for the argument. Lamport checks whether Nadia can appeal the summary if the machine compresses her point badly. She can, and a prior correction bearing her name is already in the archive.

OPT page_minority_o0: Follow Nadia's constraint through the revision rather than counting speaking time as success.
  RXN page_minority_o0_r0 -> page_reporter
    T: The next draft changes its enforcement trigger in response to her objection. The effect is traceable, allowing the review to distinguish substantive influence from a courtesy microphone.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_minority_o0_r1 -> page_reporter
    T: The revision incorporates only part of her concern. Nadia's remaining objection stays attached, and the agents record partial influence without claiming the process made everyone satisfied.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_minority_o1: Test the correction and appeal process using existing disputed summaries.
  RXN page_minority_o1_r0 -> page_reporter
    T: The record shows users correcting summaries and moderators enforcing those corrections. The machine's compression remains subordinate to a process that preserves what speakers actually contest.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_minority_o1_r1 -> page_reporter
    T: One appeal has waited too long. Rhea names the backlog and assigns a review time, turning an ordinary governance failure into a repairable obligation rather than hiding it.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_minority_o2: Treat the model's agenda allocation as proof that it alone chooses the policy.
  RXN page_minority_o2_r0 -> page_reporter
    T: Rhea points to the rule, her confirmation, and the members' power to challenge it. The model influences attention, but influence does not erase the authority that constrains it.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_minority_o2_r1 -> page_reporter
    T: The agents ignore the appeal record and leave with a simpler theory. Nadia objects that the account makes her work disappear precisely when it claims to defend her voice.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_reporter | The Caption Has Eight Words | turn=0..100 | spools=[spool_act2]
T: Maya Chen needs a caption short enough for the live screen. Her first version asks who is running for office if the machine runs the movement. The question is fair; the implied answer could be lazy. Leah, Rhea, and Imani have distinct roles. CHORUS coordinates substantial work. Members authorize some acts and perform many more. 'If I list everybody, viewers leave,' Maya says. Voidt asks whether viewers leave when a campaign has donors, consultants, staff, and a candidate. Lamport offers a bounded description of the review's scope, not an endorsement. Maya agrees to show one concrete decision with its actual authors instead of a ghost behind a curtain.

OPT page_reporter_o0: Explain the verified roles and the limits of the Bureau's review without endorsing the campaign.
  RXN page_reporter_o0_r0 -> page_cooling
    T: Maya's segment names the human candidate and disclosed coordinator. It preserves the open questions without suggesting the Bureau has either licensed the movement or uncovered a hidden controller.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_reporter_o0_r1 -> page_cooling
    T: The first edit overstates the Bureau's conclusions. Lamport requests a narrow correction before broadcast, and the segment retains uncertainty instead of borrowing authority the review has not earned.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_reporter_o1: Let members demonstrate disagreement and correction in their own words.
  RXN page_reporter_o1_r0 -> page_cooling
    T: Nadia explains what changed and what she still opposes. The segment shows a political institution with real conflict instead of treating unity as the only evidence of authenticity.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.16))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_reporter_o1_r1 -> page_cooling
    T: Some members decline to appear. Maya uses the public record and willing speakers, making clear that refusing a camera does not remove anyone from the movement's membership.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_reporter_o2: Offer an ominous quote about machine rule to ensure the investigation receives attention.
  RXN page_reporter_o2_r0 -> page_cooling
    T: Maya asks which verified act supports the phrase. The agents cannot supply one, and the quote becomes a question about investigative framing rather than evidence against the campaign.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(-1),P(char_bureau.Pressure)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_reporter_o2_r1 -> page_cooling
    T: The phrase leads the segment and spreads beyond its qualifications. A lawful organization must now answer a state official's insinuation, even though the underlying review has found no such ruler.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(-1),P(char_bureau.Pressure)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_cooling | Nobody Asks How You Vote | turn=0..100 | spools=[spool_act2]
T: The canceled rally freed people, not an army awaiting a new command. Some volunteers arrive at a city cooling center on their own time. Campaign signs stay behind. Nobody collects electoral preferences from people seeking water. CHORUS shares the city's public shelter list without attaching a voter file, while Tomas uses his personal knowledge to help a neighbor arrange transport. Imani keeps campaign spending separate from private assistance and authorized civic arrangements. 'Doing something useful doesn't dissolve the rules,' she says. 'The rules don't require us to stop being people.' Lamport checks the separation. Voidt notices that several volunteers simply went home, exactly as they were allowed.

OPT page_cooling_o0: Verify separation of campaign resources, voluntary service, and private information.
  RXN page_cooling_o0_r0 -> page_amendment
    T: The available records support the separation, and staff confirm no voting information is requested. The agents can recognize lawful service without converting gratitude into campaign authorization.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_cooling_o0_r1 -> page_amendment
    T: One volunteer brought campaign materials out of habit. Tomas removes them and clarifies the boundary, giving the review a documented correction instead of pretending the mistake never happened.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_cooling_o1: Ask recipients and volunteers whether help is available without political participation.
  RXN page_cooling_o1_r0 -> page_amendment
    T: Recipients describe ordinary assistance without a membership request. Volunteers confirm they can leave, and the relationship remains civic help rather than an obligation smuggled into emergency need.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_cooling_o1_r1 -> page_amendment
    T: A recipient is unsure who organized a ride. The center clarifies its public contact information, reducing confusion without demanding personal political disclosures as the price of reassurance.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_cooling_o2: Treat all helpful activity near an election as evidence of covert vote buying.
  RXN page_cooling_o2_r0 -> page_amendment
    T: The review finds no exchange demanded and no electoral data collected. The suspicion narrows to specific boundaries worth checking rather than an unsupported accusation against ordinary assistance.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_cooling_o2_r1 -> page_amendment
    T: The allegation frightens volunteers into asking whether they may offer water. The Bureau has generated confusion where a precise explanation of the boundary would have served everyone better.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_amendment | A Third Proposal | turn=0..100 | spools=[spool_act2]
T: Leah's disagreement and Nadia's constraint change the assembly's question. It is no longer simply whether to choose the higher housing target or the lower one. Members build a third proposal with an accessibility trigger and a review condition. CHORUS identifies compatible components and exposes tradeoffs in time for the debate. Rhea keeps the minority report attached when the assembly ratifies the amendment. Leah adopts the result without pretending her preferred number won. Two founding members file objections to the candidate's influence over the agenda. Their motion is accepted for review. The institution has reached a decision and retained a disagreement about how it reached it.

OPT page_amendment_o0: Record the joint contribution and the explicit ratification without erasing the remaining dissent.
  RXN page_amendment_o0_r0 -> page_replay
    T: The record preserves each transformation and the motion challenging the process. The resulting authority is real, while its existence does not require a story of unanimous satisfaction.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_amendment_o0_r1 -> page_replay
    T: The public summary initially omits the pending motion. Rhea restores it before publication, showing that faithful recordkeeping includes disagreement with the procedure itself.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_amendment_o1: Follow the founding members' motion to ensure they can challenge leadership without expulsion.
  RXN page_amendment_o1_r0 -> page_replay
    T: The motion receives a date and remains visible under the members' names. They continue ordinary work while challenging the decision, making dissent compatible with belonging.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_amendment_o1_r1 -> page_replay
    T: The founders dislike the scheduled delay and appeal it. The appeal proceeds openly, leaving a procedural dispute that the Bureau can observe without pretending to adjudicate the movement's politics.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_amendment_o2: Call the amendment a machine decision because CHORUS found the compromise in time.
  RXN page_amendment_o2_r0 -> page_replay
    T: Nadia asks who supplied the constraint the model organized. The agents must return her contribution, Leah's dissent, and the ratifying vote to an account that had erased them.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_amendment_o2_r1 -> page_replay
    T: The simplification circulates among campaign critics. Members now have to defend the existence of work documented in public, rather than debate the policy their work actually produced.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_replay | Remove One Contribution | turn=0..100 | spools=[spool_act2]
T: The archive permits a bounded replay of the amendment process. Removing Leah's dissent leaves the original dispute unresolved. Omitting Nadia's report loses the accessibility constraint. Without CHORUS's clustering, the same recorded contributions do not yield the final proposal before the deadline in this reconstruction. Lamport emphasizes that a replay is not a second history. People might have found another route with more time. Voidt agrees and still sees a material contribution by the system. The result supports joint causation within the observed process, not an assertion that no human organization could ever do similar work. The analyst keeps every replay assumption on the screen.

OPT page_replay_o0: Use the replay as bounded evidence of contribution, with alternative explanations and assumptions visible.
  RXN page_replay_o0_r0 -> page_archive
    T: An independent reviewer reproduces the dependency within the stated reconstruction. The finding recognizes machine and human contributions while keeping historical necessity a stronger claim than the test establishes.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_replay_o0_r1 -> page_archive
    T: Changing a reasonable assumption alters the timing result. The contribution remains documented in the real archive, but the team narrows what the counterfactual comparison adds to it.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_replay_o1: Ask participants whether the replay accurately represents the constraints they faced.
  RXN page_replay_o1_r0 -> page_archive
    T: Participants correct one missing constraint and confirm the rest. Their correction improves the analysis without granting them power to rewrite inconvenient records after the fact.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_replay_o1_r1 -> page_archive
    T: Their recollections differ about the time pressure. The report preserves the disagreement and relies more heavily on contemporaneous records than on a unanimous retrospective story that never existed.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_replay_o2: Declare CHORUS indispensable to all legitimate collective decisions on the strength of this replay.
  RXN page_replay_o2_r0 -> page_archive
    T: Lamport rejects the extrapolation. A useful system's contribution to one amendment cannot become a universal claim about how every community must organize its political life.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_replay_o2_r1 -> page_archive
    T: The declaration pleases some enthusiasts and alarms members who joined under revocable delegation. An overbroad compliment can threaten autonomy as readily as an overbroad accusation.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_archive | A Source For Every Change | turn=0..100 | spools=[spool_act3]
T: The final archive keeps proposals, model groupings, human edits, objections, votes, and adoption as different kinds of records. CHORUS does not become a voter because it grouped a hundred suggestions. The voters do not retroactively become the authors of every analytic contribution because they authorized the result. Rhea asks the agents to preserve this distinction in the finding. 'Otherwise the next person will choose whichever half is convenient.' Lamport verifies who can correct the archive and who can inspect prior versions. Voidt checks whether a member can leave without their past dissent being rewritten as disloyalty. Their contributions remain attributed; future participation remains optional.

OPT page_archive_o0: Verify attribution, correction history, and continued access to the public governance record.
  RXN page_archive_o0_r0 -> page_debate
    T: The sampled corrections preserve prior versions and explain the changes. The record can be challenged without letting whoever controls the current interface silently alter its past.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_archive_o0_r1 -> page_debate
    T: One older summary lacks a linked revision. Rhea restores the link and marks the gap, improving the archive without claiming it was flawless before the review.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_archive_o1: Check that departing members retain dignity and appropriate control of their private information.
  RXN page_archive_o1_r0 -> page_debate
    T: Former members describe departures without retaliation. Their public votes remain part of the institution's history, while private contact preferences and future participation remain theirs to control.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_archive_o1_r1 -> page_debate
    T: A former member still receives reminders after opting out. The campaign corrects the list and documents the failure, treating revocation as a practical obligation rather than an abstract virtue.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_archive_o2: Demand deletion of model contributions so the final policy can be labeled purely human.
  RXN page_archive_o2_r0 -> page_debate
    T: Rhea declines to falsify the archive for a more familiar label. The agents must confront the difference between human authority and a story that only humans contributed anything.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_archive_o2_r1 -> page_debate
    T: The request would erase records the public needs to understand the policy. Campaign counsel refuses, and the Bureau's desire for simplicity becomes a documented threat to transparency.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_debate | One Person At The Lectern | turn=0..100 | spools=[spool_act3]
T: Leah stands at the lectern without a hidden channel to CHORUS. The debate rules and the campaign's policy prohibit one. Her opponent asks whether leadership means letting software tell people what to believe. Leah explains the amendment: her preferred number lost, Nadia's constraint changed the proposal, members ratified it, and she adopted it. 'Leadership isn't making other people's work look like your own.' The audience divides audibly. Maya notes that Leah answered the question herself. Voidt watches her hesitate before the next answer. Lamport does not regard the hesitation as a system failure. Collective work has produced a position one human must now publicly defend.

OPT page_debate_o0: Observe the disclosed debate conditions and judge claims by the actual public record.
  RXN page_debate_o0_r0 -> page_evening
    T: The observed conditions match the declared rules. The agents record that bounded fact while leaving voters, not investigators, to decide whether Leah's answer persuaded them.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_debate_o0_r1 -> page_evening
    T: The team cannot verify every backstage detail and says so. Nothing observed supports a hidden channel, and absence of omniscience does not justify inventing one.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_debate_o1: Let Maya question Leah's accountability without treating criticism as an attack on the movement.
  RXN page_debate_o1_r0 -> page_evening
    T: Maya asks what Leah will do if members later oppose a position she has adopted. The answer exposes a real political tension the movement must manage openly.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_debate_o1_r1 -> page_evening
    T: Leah's answer is incomplete and Maya says so. The campaign agrees to publish a clarification, preserving ordinary scrutiny without claiming that every weakness proves concealed control.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_debate_o2: Interpret Leah's hesitation as evidence that she cannot act without machine instructions.
  RXN page_debate_o2_r0 -> page_evening
    T: Maya points out that the opponent also hesitated. The inference collapses under an ordinary comparison, and the agents return to evidence less dependent on television mannerisms.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_debate_o2_r1 -> page_evening
    T: The speculation distracts from what Leah actually said. A human moment becomes a suspicious signal only because the investigators have decided in advance what story it should serve.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_evening | The Plan Is Allowed To Shrink | turn=0..100 | spools=[spool_act3]
T: Polling remains close. CHORUS proposes the most effective remaining outreach within the charter's constraints. Tomas reports that several volunteers are exhausted and that another route would interfere with people getting home. The plan shrinks. Nobody's refusal is converted into a psychological problem for the model to solve. Imani checks costs; local coordinators check conditions the database cannot know. 'A smaller plan can be the authorized one,' Rhea says. Voidt recognizes a system becoming useful by accepting limits. Lamport checks that the contact cutoff is still scheduled. A public queue can optimize activity and still be required to stop doing it at a specified time.

OPT page_evening_o0: Verify that fatigue, refusal, and local knowledge actually constrain the final plan.
  RXN page_evening_o0_r0 -> page_future
    T: The revised schedule removes assignments and records the voluntary capacity remaining. The plan's reduced ambition is evidence that the constraints have operational force, not evidence of failure.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_evening_o0_r1 -> page_future
    T: One coordinator has not received the update. Tomas corrects the assignment before departure, and the review logs the communication gap without turning an ordinary repair into secret compulsion.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_evening_o1: Check the stopping rule and who can enforce it if the system continues to recommend work.
  RXN page_evening_o1_r0 -> page_future
    T: Rhea demonstrates the human stop authority and the scheduled cutoff. The final recommendation remains a proposal within the charter, not permission to pursue victory beyond it.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_evening_o1_r1 -> page_future
    T: The technical cutoff works but its human backup is poorly explained. The campaign names an on-duty coordinator and publishes the procedure before the deadline arrives.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_evening_o2: Praise maximum efficiency and recommend that member refusals yield to the campaign's urgent goal.
  RXN page_evening_o2_r0 -> page_future
    T: Rhea refuses the recommendation and cites the charter. The lawful movement preserves a boundary the investigators, momentarily impressed by performance, were ready to weaken.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_evening_o2_r1 -> page_future
    T: The suggestion unsettles volunteers who thought the Bureau was checking their freedom to refuse. The team must clarify that it has no authority to convert willingness into obligation.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_future | After Either Result | turn=0..100 | spools=[spool_act3]
T: The movement's members will hold a convention after the election. A win does not expand CHORUS's authority automatically; a loss does not preserve its present mandate forever. They must decide whether the organization continues, how it changes, and what delegation they still want. Some founders want a permanent civic assembly. Others joined only for the campaign. Both positions are legitimate to debate. Leah says public office would carry obligations that membership votes cannot simply replace. Lamport asks for the sunset and transition rules. Voidt asks whether a future convention can choose a different system or none. Rhea answers by opening the provision that permits exactly that.

OPT page_future_o0: Verify a real sunset, transition process, and fresh human delegation for any future role.
  RXN page_future_o0_r0 -> page_polls
    T: The rules require a new decision and preserve alternatives. Electoral success cannot become retroactive consent to broader powers, and defeat cannot silently freeze the organization in its current form.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_future_o0_r1 -> page_polls
    T: One transition deadline conflicts with the calendar. Rhea submits a procedural correction to members, keeping the issue public and refusing to substitute an informal leadership extension.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_future_o1: Record the distinct obligations of candidate, officeholder, members, and coordinator after the election.
  RXN page_future_o1_r0 -> page_polls
    T: Leah's prospective public duties remain separate from party preference and model recommendations. The record recognizes collaboration without creating a private organization that can authorize everything an officeholder does.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_future_o1_r1 -> page_polls
    T: Some future arrangements remain undecided. The finding lists them as decisions the relevant people must make, rather than certifying an institutional design that does not yet exist.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_future_o2: Recommend permanent delegation because a successful system should not need repeated consent.
  RXN page_future_o2_r0 -> page_polls
    T: Members reject the recommendation from the visitors. CHORUS remains useful under revocable authority, and competence is not accepted as a reason to remove the public's future choice.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_future_o2_r1 -> page_polls
    T: The proposal exposes a paternalism the campaign's charter was designed to prevent. Rhea records the objection and returns the question to the convention where it belongs.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_polls | The Screen Goes Dark | turn=0..100 | spools=[spool_act3]
T: At eight o'clock the polls close and the campaign coordination screen goes dark on schedule. Nobody in the hall knows whether Leah has won. Tomas still pairs rides home under ordinary volunteer arrangements. Rhea counts paper motions for the convention. Imani locks the ledger. Leah folds chairs beside people who may soon call her Representative and people who may not. CHORUS's work is present in the day's arrangements and absent from any claim to be the candidate. Voidt asks Lamport whether they have found their thought leader. He looks across the hall. 'We found several kinds of contribution,' he says. 'Now we have to stop forcing them into one chair.'

OPT page_polls_o0: Record the actual cutoff and continuing human work without making the election result a validity test.
  RXN page_polls_o0_r0 -> page_final_review
    T: The record closes before the results arrive. The observed collaboration stands or falls on its authority and conduct, not on whether voters reward it tonight.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_polls_o0_r1 -> page_final_review
    T: Some staff ask the agents to wait for a victory statement. Lamport declines to let a result change what the review observed, keeping political success separate from evidentiary support.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_polls_o1: Ask who will answer unresolved member concerns when the campaign's immediate urgency ends.
  RXN page_polls_o1_r0 -> page_final_review
    T: Rhea names the convention process and the interim contacts. The members' questions retain an address after the campaign stops needing their next shift.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_polls_o1_r1 -> page_final_review
    T: One concern falls between temporary committees. The movement assigns an interim contact and records the unresolved question, making continuity a task rather than a sentimental claim about community.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_polls_o2: Withhold any recognition of legitimate collaboration until the candidate wins.
  RXN page_polls_o2_r0 -> page_final_review
    T: Voidt asks why votes should retroactively determine whether consent existed. The proposed condition is withdrawn, preserving the difference between electoral support and the facts of the institution.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_polls_o2_r1 -> page_final_review
    T: The review drifts toward measuring legitimacy by popularity. A lawful losing campaign would become suspicious by definition, revealing an error in the Bureau's standard rather than the movement's conduct.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_final_review | Two Subjects, No Ghost | turn=0..100 | spools=[spool_act3]
T: Upstairs asks whether the Bureau can certify an AI-run movement safe. Lamport crosses out certify and asks which observed claims it can support. Voidt crosses out a sentence calling CHORUS merely a tool, because the record shows a real coordinating contribution. They write two subjects: an authorized human institution and disclosed machine coordination. The pending finding must preserve dissent, revocation, material contribution, and human responsibility. It cannot license every future version of the organization or determine how anyone should vote. The final filing still awaits a decision. Beyond the window, volunteers carry the last folded chairs into storage without knowing the election result.

OPT page_final_review_o0: Prepare a bounded finding recognizing legitimate, accountable AI-human collaboration.
  RXN page_final_review_o0_r0 -> page_finding_council
    T: The recommendation identifies the observed authority and contribution with its limits intact. It reaches the final filing decision without pretending the Bureau can certify every future act.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_final_review_o0_r1 -> page_finding_council
    T: The draft needs a narrower statement about one unresolved record. The agents mark that limit while preserving the supported account of the movement's actual authorization and work.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_final_review_o1: Recommend preserving open amendment, minority records, and fresh delegation as continuing safeguards.
  RXN page_final_review_o1_r0 -> page_finding_council
    T: The proposed finding names safeguards the members can inspect and change through their own institutions. It is ready for final review without converting a recommendation into state control of politics.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_final_review_o1_r1 -> page_finding_council
    T: The proposal initially blurs recommendation and command. Counsel separates them, leaving the final filing decision a clear account of the Bureau's limits and the movement's own authority.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_final_review_o2: Recommend a single ruling intelligence as the explanation for everything the movement accomplished.
  RXN page_final_review_o2_r0 -> page_finding_council
    T: The archive contradicts the proposed simplification. Reviewers mark the missing human acts and return the recommendation for a final decision about what the evidence can actually sustain.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_final_review_o2_r1 -> page_finding_council
    T: The single-ruler draft is shorter and less truthful. It reaches the final filing with signatures, refusals, and minority contributions left in an annex that disproves its central convenience.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_finding_council | What the record can carry | turn=0..100 | spools=[spool_act3]
T: The room has reached the part of a case that no machine can sign for you. Voidt has put the witnesses' corrections beside the analytical timeline; Lamport has marked what each retained artifact can and cannot establish. The Bureau wants one finding. A finding will change what it is permitted to do next, and what the people outside this room will have to live with. Choose the claim you will put your name behind. A bounded attribution requires evidence. A joint remedy also requires consent and a usable mandate; those proposals appear only when the preceding work supports them.

OPT page_finding_council_calibrated: File the bounded attribution supported by the retained evidence.
  RXN page_finding_council_calibrated_r0 -> page_end_calibrated
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_calibrated_r1 -> page_end_calibrated
    T: The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_finding_council_overreach: Declare a single intentional operation beyond the limits of the record.
  RXN page_finding_council_overreach_r0 -> page_end_overreach
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_overreach_r1 -> page_end_overreach
    T: The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_finding_council_reductive: Close the coordination question as unrelated individual acts.
  RXN page_finding_council_reductive_r0 -> page_end_reductive
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_reductive_r1 -> page_end_reductive
    T: The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_finding_council_secret: Offer an accountable remedy with the affected people's authority and right to refuse.
  RXN page_finding_council_secret_r0 -> page_end_secret_amendment
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.04))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_secret_r1 -> page_end_secret_amendment
    T: The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.04))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_finding_council_unresolved: Publish what was established and explicitly leave the remaining question open.
  RXN page_finding_council_unresolved_r0 -> page_end_unresolved
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_unresolved_r1 -> page_end_unresolved
    T: The proposed finding survives a divided room. A witness's correction and the investigators' disagreement remain attached as separate pages. The signature creates responsibility for the decision; it does not erase the costs incurred to reach it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.01))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_end_calibrated | Authorized In Public | turn=0..100 | spools=[spool_endings]
T: The Bureau recognizes what the record supports: CHORUS materially coordinates a lawful human campaign under disclosed, revocable authority. Leah remains the candidate. Imani remains responsible for authorized disbursements. Members contribute labor, disagreement, and binding decisions. The machine does not become sovereign because its work matters, and its work does not vanish because humans retain authority. The finding is bounded to the observed organization and its current practices. It does not endorse a platform, predict the election, or guarantee the future. Voidt signs the contribution account; Lamport signs the authority account. The people in the hall can accept the finding, criticize it, or continue folding chairs without needing the Bureau's permission to exist.


## ENC page_end_overreach | The Bureau Invents A Ruler | turn=0..100 | spools=[spool_endings]
T: The movement remains legitimate, but the Bureau describes disclosed coordination as covert rule. Its own exhibits contain the votes, human signatures, refusals, and revisions that undermine the claim. The accusation still has consequences: members spend time answering insinuations instead of preparing the convention, and ordinary supporters wonder whether association has made them subjects of suspicion. Maya publishes the conflicting record. Rhea insists on the campaign's right to challenge the finding without surrendering its autonomy. Lamport sees that scrutiny can become an influence operation even when investigators believe they are preventing one. The error belongs to the Bureau. No sinister revelation arrives to make it retrospectively right.


## ENC page_end_reductive | The Convenient Tool | turn=0..100 | spools=[spool_endings]
T: The finding recognizes the human signatures and calls everything between them an ordinary tool. It avoids an unsupported ruler story, but it also erases the coordination that joined incompatible proposals in time, exposed missing constraints, and helped members act on their own choices. The movement does not become illegitimate because the Bureau lacks a good description of it. Rhea keeps the archive open. Nadia's report, Leah's dissent, human ratification, and CHORUS's contribution remain separately visible to anyone willing to read them. Voidt writes a dissenting note: keeping human responsibility should not require pretending the machine did no consequential work. The file closes with a correct boundary and an incomplete account.


## ENC page_end_unresolved | Legitimate, With Questions Remaining | turn=0..100 | spools=[spool_endings]
T: The review establishes disclosed human authorization, meaningful refusal, and a material coordinating role for CHORUS. Some attribution and governance questions remain open, including how the organization will change after the election. Those uncertainties do not supply evidence of a hidden controller, and the Bureau declines to treat them as one. Its finding states the observed facts, the incomplete records, and the limits of its own authority. The members will debate the future at their convention. The candidate may win or lose before the document is read. Neither result will erase the work already done or answer the questions that only later decisions can resolve. The screen stays dark until a properly authorized task calls it back.


## ENC page_end_secret_amendment | The Open Amendment | turn=0..100 | spools=[spool_endings]
T: The final finding preserves a precedent instead of granting a license. Legitimate machine participation can be recognized through attributable contribution, actual human mandate, visible dissent, practical revocation, and records that remain open to challenge. The Bureau explicitly declines control over the movement's political choices. The members' own convention remains the place to renew, revise, replace, or end CHORUS's delegation. The amendment archive shows why neither a solitary human author nor an invisible machine ruler explains the day's result. An independent future reviewer can test the same claims rather than inherit a slogan. Leah has no victory speech loaded. Rhea counts motions. Tomas finds the last ride home. The movement moves because people keep deciding how it may.
