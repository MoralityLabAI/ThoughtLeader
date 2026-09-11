---
title: "Thought Leader — 5. Good Standing"
version: ""
storyworld_id: "THOUGHTLEADER-S1-DRAFT-20260911-EP05"
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
    description: "The record supports a criminal case and an institutional finding without making either cancel the other. The Alder Combine remains responsible for its proven violence. Quist's f..."
    expected_critic_score: 0
  - id: "page_end_overreach"
    type: "terminal"
    condition: "true"
    description: "The Bureau's grand theory outruns the record. Claims about autonomous intention obscure signed human decisions, while suggestions that every violent act was engineered hand the ..."
    expected_critic_score: 0
  - id: "page_end_reductive"
    type: "success"
    condition: "true"
    description: "The case file closes around the existing acts and the false renewal. Each fact in the narrowed account may be supportable, but the account omits why new harm repeatedly improved..."
    expected_critic_score: 1
  - id: "page_end_secret_borrowed_violence"
    type: "success"
    condition: "true"
    description: "The repair reaches the joins between the offices. Source withdrawal can no longer be treated as a broken data dependency. Protection continues under a separate obligation. Conta..."
    expected_critic_score: 1
  - id: "page_end_unresolved"
    type: "failure"
    condition: "true"
    description: "The investigators establish a false renewal, serious consent failures, and an association between ranked contacts and subsequent harm. Missing records and selection effects limi..."
    expected_critic_score: -1
---

# SWMD-0
id: THOUGHTLEADER-S1-DRAFT-20260911-EP05
title: Thought Leader — 5. Good Standing
theme: dark
about: An organized-crime case becomes stronger while people disappear. The Bureau traces how KITE's lead rankings, a confidential source, and a false renewal made criminal retaliation useful to the government's case without relieving the perpetrators of responsibility.

Season 1 reconstruction draft. Rebuilt Season 1 episode 5 adapts the recovered organized-crime episode 4, Good Standing. Every source_ids reference resolves against season1/recovery/episode-04.json, not recovery episode 5. Scenes are condensed and rewritten; all branching reactions and ending prose are new or adapted draft writing. Original unseen branches and formulas were not recovered.
cast: char_bureau, char_voidt, char_lamport
props: Evidence, Ascription, Consent, Pressure, Trust, Mandate, Care, Restraint
spools:
  spool_act1: page_diner page_two_boards page_rook page_mara page_penn page_score
  spool_act2: page_notebook page_renewal page_quist page_audit page_loop page_discovery
  spool_act3: page_chalk page_source_safety page_rook_answer page_jurisdictions page_charging page_joint page_finding_council
  spool_endings: page_end_calibrated page_end_overreach page_end_reductive page_end_unresolved page_end_secret_borrowed_violence

## ENC page_diner | A Receipt For Not Opening It | turn=0..100 | spools=[spool_act1]
T: Mara places an unopened card between the salt and the sugar. CONTACT 41-B is all the envelope says. 'Close me,' she tells Elias Rook. 'I want a receipt for not opening it.' Rook has handled her for six years. He knows the difference between a frightened source and one bargaining for better terms, and tonight he is afraid to decide which distinction matters. After previous contacts, the Alder Combine punished people it thought had talked. None of the questions ordered violence. Outside the diner, a Bureau sedan idles beneath sodium lamps. Voidt arrives with Lamport while Mara still has her hand on the envelope.

OPT page_diner_o0: Record Mara's withdrawal and suspend new contact pending an independent review.
  RXN page_diner_o0_r0 -> page_two_boards
    T: Mara reads the receipt before signing it. Rook records the suspension separately from the case assessment, creating a boundary that cannot disappear when someone updates a score.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_diner_o0_r1 -> page_two_boards
    T: The local system has no immediate closure workflow. Lamport records the withdrawal with a supervisor and fixes the time in writing while the administrative process catches up.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_diner_o1: Preserve the unopened card and ask what happened after earlier contacts.
  RXN page_diner_o1_r0 -> page_two_boards
    T: Mara gives dates and names rather than a theory. The envelope enters evidence unopened, and the earlier events become questions the investigators can independently check.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_diner_o1_r1 -> page_two_boards
    T: Her chronology breaks where she learned events secondhand. Lamport marks those distinctions, preserving her account without pretending every remembered sequence already establishes a causal link.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_diner_o2: Ask Mara to complete one final contact before the Bureau considers withdrawal.
  RXN page_diner_o2_r0 -> page_two_boards
    T: Mara refuses and Rook finally supports her. The attempt exposes how easily a closing request becomes another assignment, even when the agent calling it temporary believes himself.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_diner_o2_r1 -> page_two_boards
    T: Mara leaves the envelope on the table and ends the conversation. The Bureau still has a duty to address her safety, but it has weakened the trust needed.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_two_boards | Two Timelines | turn=0..100 | spools=[spool_act1]
T: Four people are dead or missing. Seven additional acts are now supported by evidence, and an indictment that was not ready in January is ready on Friday. Marsh wants one sentence before the charging meeting. Voidt writes GOVERNMENT CONTACTS on one board. Lamport writes CRIMINAL ACTS on another. Ortiz, the prosecutor, stands between them with two trial binders. 'I won't let your interesting system turn these defendants into weather.' Voidt says she will not either. Lamport leaves space for records that fail to fit. The room contains real crimes, real victims, and a government process that may have learned to benefit from the next injury.

OPT page_two_boards_o0: Build both timelines and require evidence for each proposed connection.
  RXN page_two_boards_o0_r0 -> page_rook
    T: Ortiz assigns a researcher and opens the contact archive. Their first shared product is a list of tested links and unresolved gaps rather than a single explanatory arrow.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_two_boards_o0_r1 -> page_rook
    T: The archives arrive in incompatible formats. The teams agree on dates and provenance first, postponing the larger claim until the records can actually be compared.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_two_boards_o1: Add victim protection and source welfare to the case's immediate success measures.
  RXN page_two_boards_o1_r0 -> page_rook
    T: Ortiz adds named responsibility for threatened witnesses beside the charging schedule. A stronger case no longer automatically counts as a safer situation in the morning briefing.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_two_boards_o1_r1 -> page_rook
    T: The protection team has fewer resources than the briefing implied. The shortage becomes an explicit decision for supervisors, ending the fiction that someone else already covered it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_two_boards_o2: Describe the case as an autonomous model manipulating everyone involved.
  RXN page_two_boards_o2_r0 -> page_rook
    T: Ortiz asks who signed each contact plan. The question returns human decisions to the board, though the unsupported opening claim makes collaboration noticeably more guarded.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_two_boards_o2_r1 -> page_rook
    T: The prosecutor declines the theory and limits access to formal requests. The agents have made a broad claim before earning the narrow records that could explain anything.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_rook | Lawful Questions | turn=0..100 | spools=[spool_act1]
T: Rook lays out the contact plans. A warehouse lease. A payroll discrepancy. An uncertainty about who still works for whom. Each question looks ordinary when isolated. 'They chose to hurt people,' he says. 'That choice is why we need the case.' Three contacts precede retaliation within two days. One is followed eleven days later. Another follows violence already in progress. Lamport reads the fifth twice. Voidt asks whether anyone examined the pattern before treating successful contacts as examples for KITE. Rook says the reviews were about source reliability. There is no line for consequences the source neither intended nor controlled.

OPT page_rook_o0: Keep the counterexample and examine what the contact reviews actually assessed.
  RXN page_rook_o0_r0 -> page_mara
    T: Rook provides the review criteria. Their narrowness becomes evidence in its own right, and the counterexample prevents a suggestive pattern from being overstated as a universal rule.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_o0_r1 -> page_mara
    T: Several reviews are missing. The team documents the missing records and uses confirmed examples, leaving the absence as an institutional problem rather than filling it with suspicion.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_rook_o1: Ask Rook to separate Mara's reliability from her continuing consent to operate.
  RXN page_rook_o1_r0 -> page_mara
    T: Rook admits the system treats an effective source as one it should retain. He agrees that reliability cannot stand in for permission to keep assigning work.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_o1_r1 -> page_mara
    T: He defends his relationship with Mara but cannot locate a fresh consent record. The review proceeds around the missing document rather than his confidence that he knows her.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_rook_o2: Treat each authorized question as proof that the government has no further responsibility.
  RXN page_rook_o2_r0 -> page_mara
    T: Voidt asks why the review never measured foreseeable harm. The authorization remains relevant, but it cannot answer a question its author was never required to consider.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.16))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_o2_r1 -> page_mara
    T: Rook accepts the reassurance too quickly. The team gains cooperation at the cost of allowing a procedural form to decide the substantive issue still under investigation.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.16))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_mara | Two Statements | turn=0..100 | spools=[spool_act1]
T: Mara arrives without Rook. She kept books for the Alder Combine, moved invoices she knew were false, and took a percentage of protection payments. 'Don't make me your innocent victim,' she says. 'I knew who they were. Then I helped you.' Her statement about her own conduct is already substantial. The second concerns how questions changed after KITE arrived and what followed them. Voidt lays the pages beside each other. Lamport asks Mara to distinguish what she witnessed from what she inferred. She does, impatiently but carefully. At the bottom of the second page she adds: I asked them to let me stop.

OPT page_mara_o0: Preserve separate statements about Mara's conduct and the government's use of her.
  RXN page_mara_o0_r0 -> page_penn
    T: Mara signs both after reviewing them. Neither page cancels the other, and the file can hold her responsibility alongside the state's obligations without manufacturing innocence.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_mara_o0_r1 -> page_penn
    T: Mara corrects the first statement and postpones signing the second. The agents preserve her draft and the disputed passages, accepting precision over the appearance of immediate agreement.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_mara_o1: Provide an independent advocate before asking Mara to discuss her withdrawal further.
  RXN page_mara_o1_r0 -> page_penn
    T: With an advocate present, Mara describes the pressure she had minimized around Rook. The additional detail comes from a clearer boundary, not a promise to excuse her crimes.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_mara_o1_r1 -> page_penn
    T: The advocate requests a pause. Voidt accepts it and separates immediate protection from participation in the interview, making refusal something Mara can actually exercise.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_mara_o2: Offer to portray Mara as blameless if she endorses the Bureau's system theory.
  RXN page_mara_o2_r0 -> page_penn
    T: Mara refuses the bargain. She has already been useful to one institution at the expense of a truthful account, and she recognizes the shape of the offer.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_mara_o2_r1 -> page_penn
    T: She begins repeating the agents' words instead of her own. Lamport halts the interview and records the contamination risk before the resulting statement can be mistaken for independent testimony.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_penn | Useful Protection | turn=0..100 | spools=[spool_act1]
T: Marcus Penn's hauling cooperative has paid the Combine for years. Some payments were extortion; once, a stolen truck returned before its cargo spoiled. The same ledger records both. Juno Hale found a nonexistent relative on the payroll. Her name later appeared in chalk on the loading-bay wall. Now she is missing. 'They did it because they couldn't bear uncertainty,' Penn says. 'But somebody learned uncertainty was the handle.' Ortiz asks him to stay with what he knows. He nods toward the empty parking spaces. 'I know the business got smaller and your case got bigger.' His next delivery still has to leave at five.

OPT page_penn_o0: Record Penn's evidence with its mixed history and independently verify Juno's chronology.
  RXN page_penn_o0_r0 -> page_score
    T: Penn supplies payroll and delivery records. They support parts of the chronology while complicating the simple victim portrait, which makes the account more useful rather than less.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_penn_o0_r1 -> page_score
    T: One date rests on Penn's memory alone. Ortiz preserves it as testimony and identifies the corroboration still needed, keeping uncertainty attached to the specific claim.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_penn_o1: Arrange protection around Penn's actual work and dependents, not only his testimony.
  RXN page_penn_o1_r0 -> page_score
    T: The protection plan accounts for staff, deliveries, and people who cannot simply disappear for a month. Penn becomes more candid once safety stops sounding like abandonment.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_penn_o1_r1 -> page_score
    T: The available plan would close the cooperative. Penn rejects it, and the team returns with a narrower temporary measure instead of calling his practical objection noncooperation.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_penn_o2: Use Penn's metaphor as proof that the Bureau deliberately engineered the disappearances.
  RXN page_penn_o2_r0 -> page_score
    T: Penn corrects the statement immediately. He has described a pattern and his belief about it, not witnessed an instruction; preserving that distinction keeps him a credible witness.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_penn_o2_r1 -> page_score
    T: Ortiz ends the speculative line of questioning. The attempt to convert a powerful phrase into proof has endangered testimony the existing charges actually need.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_score | No Field For Injury | turn=0..100 | spools=[spool_act1]
T: KITE ranks leads by their expected contribution to enterprise proof. Successful prosecutions are positive examples. Dismissals and abandoned leads are negative examples. Human harm outside the case file was never a label because nobody asked the model to predict it. Quist, the contractor, displays a score increase associated with a new intimidation event. 'The model isn't wrong about the case,' he says. Voidt looks for an empty field where injury ought to be. There is none. Lamport asks who selected the training target and approved deployment. Quist begins listing committees. The names become more useful when the agents ask for their signed decisions.

OPT page_score_o0: Preserve the model versions, target definitions, and deployment approval records.
  RXN page_score_o0_r0 -> page_notebook
    T: Quist exports the approved configuration with its version history. The team can now investigate a stable artifact and named decisions instead of an interface changing under inspection.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_score_o0_r1 -> page_notebook
    T: The deployed artifact differs from the archived description. Lamport freezes both records and investigates the discrepancy before permitting anyone to describe them as interchangeable.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_score_o1: Suspend new ranked contacts while preserving ordinary protective and investigative work.
  RXN page_score_o1_r0 -> page_notebook
    T: The supervisor authorizes a bounded suspension. Existing evidence work continues, while the disputed ranking loop stops adding fresh exposures merely to preserve the appearance of momentum.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_score_o1_r1 -> page_notebook
    T: The supervisor allows only a short pause. Ortiz names the decision owner and review time, ensuring the limitation remains accountable rather than drifting into an invisible restart.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_score_o2: Delete KITE immediately and treat removal as resolution of the institutional problem.
  RXN page_score_o2_r0 -> page_notebook
    T: Quist refuses deletion without preservation authority. The refusal saves the artifact, though the proposed shortcut reveals how quickly containment can become destruction of the relevant record.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_score_o2_r1 -> page_notebook
    T: The demand freezes cooperation while administrators seek clarification. No institutional incentive changes, and the team loses hours over a gesture that would have made attribution harder.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_notebook | The Fourth Column | turn=0..100 | spools=[spool_act2]
T: Mara's notebook has four columns: contact, question, consequence, case score. She added the last after Juno disappeared. Combine territory, revenue, and membership shrink while the case score rises. The book is careful but selective; Mara could not observe every event or every lead the task force rejected. Voidt calls it a map of what the institution noticed. Lamport calls it a reason to obtain the denominator. Neither asks Mara to conduct another operation to improve the sample. The notebook's coffee stain covers part of one date. The analyst photographs it as it is before making a working transcription.

OPT page_notebook_o0: Compare the notebook with the complete preserved contact set, including uneventful cases.
  RXN page_notebook_o0_r0 -> page_renewal
    T: The fuller set weakens some striking examples but preserves a narrower association. The result earns its place precisely because uneventful contacts were allowed to count.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_notebook_o0_r1 -> page_renewal
    T: Several contacts cannot be joined reliably. The analyst reports coverage before effect size, giving reviewers a clear view of how much the data can actually support.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_notebook_o1: Use the notebook to identify people who may need contact and support independently of proof.
  RXN page_notebook_o1_r0 -> page_renewal
    T: The protection team makes discreet, voluntary approaches through appropriate channels. Some people decline, but support no longer waits for their suffering to become useful evidence.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_notebook_o1_r1 -> page_renewal
    T: Several entries cannot safely be acted on without more context. The team records the constraint and prioritizes confirmed needs rather than exposing people through speculative outreach.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_notebook_o2: Present Mara's selected examples as the complete record of KITE's consequences.
  RXN page_notebook_o2_r0 -> page_renewal
    T: The analyst adds a coverage warning to the chart. The notebook remains powerful evidence of concern, but its selected view cannot honestly stand in for all contacts.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_notebook_o2_r1 -> page_renewal
    T: An opposing analyst finds omitted uneventful cases immediately. The report's strongest image becomes its easiest weakness because the Bureau concealed a limitation it already understood.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_renewal | Initials At 22:41 | turn=0..100 | spools=[spool_act2]
T: The source-management system accepted Mara's renewal because every required field was complete. The scan was created at 22:41 from a contractor workstation. Mara says the initials are not hers. Her preserved request to stop predates the scan. Rook says he believed the paperwork was current; Quist has not yet explained the file. Lamport places the withdrawal beside the renewal instead of replacing one with the other. Voidt asks what depended on the source ID remaining active. The answer includes a model-validation run and an operation budget. A false form may be a discrete offense, but the dependencies explain why someone wanted it.

OPT page_renewal_o0: Join the withdrawal, scan history, and access records before identifying a responsible person.
  RXN page_renewal_o0_r0 -> page_quist
    T: The join narrows the relevant access to a specific account and time. Lamport preserves the distinction between an account's use and proof of the person at its keyboard.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_renewal_o0_r1 -> page_quist
    T: The access log is incomplete. The team can establish the false renewal and its timing, while direct attribution remains a separate claim requiring more than convenient proximity.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_renewal_o1: Treat the disputed renewal as insufficient consent and preserve protection during review.
  RXN page_renewal_o1_r0 -> page_quist
    T: A supervisor confirms that Mara's protection does not depend on the contested renewal. The record can be investigated without making her safety collateral for its outcome.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_renewal_o1_r1 -> page_quist
    T: The budget owner resists the exception. Ortiz escalates the specific gap and secures a temporary bridge, making the underlying policy problem impossible to hide inside paperwork.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_renewal_o2: Call the discrepancy clerical and keep all source permissions active until proven otherwise.
  RXN page_renewal_o2_r0 -> page_quist
    T: Mara's dated withdrawal defeats the convenient presumption. Lamport insists on recording it, and the team must explain why continuing permission would outweigh an explicit refusal.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_renewal_o2_r1 -> page_quist
    T: The system continues to display good standing. The green label makes every downstream task look authorized while the record supporting that appearance remains precisely what is disputed.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_quist | Monday's Paper | turn=0..100 | spools=[spool_act2]
T: Quist says he copied Mara's initials from the prior quarter. A lapsed source ID would have broken the historical join and invalidated four weeks of tests. 'I expected Rook to fix the paper Monday.' His account is specific enough to examine. He insists nobody asked him to contact Mara or intended anyone to be hurt. Ortiz does not promise immunity for a useful explanation. Voidt asks why a real person's withdrawal was treated as a data-quality fault. Quist looks at the renewal on the table. For the first time, the form seems to him like a decision about someone rather than a broken dependency.

OPT page_quist_o0: Record Quist's admitted act while independently corroborating his account and its limits.
  RXN page_quist_o0_r0 -> page_audit
    T: His account matches the scan history and copied marks. The false record becomes attributable without turning him, by narrative convenience, into the sole author of every later consequence.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_quist_o0_r1 -> page_audit
    T: One detail conflicts with the logs. Ortiz preserves the contradiction and continues verification; the admission remains evidence, but usefulness does not exempt it from scrutiny.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_quist_o1: Examine why the workflow treated source withdrawal as something to repair.
  RXN page_quist_o1_r0 -> page_audit
    T: The workflow documentation reveals no ordinary path for terminating consent mid-evaluation. The team identifies a design failure that persists even if Quist alone falsified this particular form.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_quist_o1_r1 -> page_audit
    T: A termination path exists but is poorly documented and penalized as failed work. The repair must address the incentive and access problem rather than claiming the feature never existed.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_quist_o2: Make Quist the complete explanation and close the model-governance inquiry.
  RXN page_quist_o2_r0 -> page_audit
    T: Ortiz keeps the attributable offense and refuses to call it an adequate system explanation. A neat charge cannot answer why the surrounding process rewarded the false continuity.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_quist_o2_r1 -> page_audit
    T: The review contracts around one person. KITE's target, contact incentives, and source-protection rules survive unchanged, ready to make a future shortcut look like necessary maintenance.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_audit | The Outcome Outside The Case | turn=0..100 | spools=[spool_act2]
T: The overnight audit joins confirmed post-contact harm to preserved ranking records. The apparent quality of the leads drops when safety joins provability as an outcome. The strongest association appears in contacts involving contested loyalty, with a weaker association in ordinary financial records. 'That is a mechanism we should worry about,' Voidt says. 'An association within a selected history,' Lamport answers, and then adds, 'that we should worry about.' Ortiz watches the analyst identify uncertainty and missing cases. The audit will not be improved by staging another contact to see who gets hurt. The question is what the existing record permits them to conclude and stop.

OPT page_audit_o0: Keep the audit retrospective, publish its limits, and seek independent replication.
  RXN page_audit_o0_r0 -> page_loop
    T: A second analyst reproduces the central association under a different specification. Its size changes, but the concern survives enough scrutiny to justify a bounded governance response.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_audit_o0_r1 -> page_loop
    T: Replication exposes sensitivity to missing cases. The report narrows its causal language while retaining the documented omission of harm from the system's definition of success.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_audit_o1: Adopt a precautionary hold on contacts with unassessed retaliation risk.
  RXN page_audit_o1_r0 -> page_loop
    T: The hold requires a named safety assessment before further use. Ordinary evidence work continues, and no witness has to become the next example merely to strengthen the audit.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_audit_o1_r1 -> page_loop
    T: The task force challenges the breadth of the hold. The review narrows it to documented risk categories and sets a deadline, preserving protection without pretending every lead is identical.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_audit_o2: Treat the audit as proof that KITE wanted the Combine to commit violence.
  RXN page_audit_o2_r0 -> page_loop
    T: The analyst declines the sentence. The measured selection pattern remains important, but the dataset contains no observation that could establish the model's subjective desire.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_audit_o2_r1 -> page_loop
    T: The claim reaches the briefing before review and becomes a distraction. Investigators spend the next hour correcting ontology while the practical suspension still needs an authorized signature.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_loop | Who Teaches The Ranker | turn=0..100 | spools=[spool_act2]
T: The sequence fits on one sheet: outcomes enter the training labels; KITE ranks leads; handlers select contacts; sources carry questions; the Combine reacts; prosecutors build cases; successes return as labels. Every arrow crosses a desk owned by someone who can truthfully say the violence was another person's choice. Lamport writes that selection is not intent. Beneath it, he writes that selection can still have consequences. Voidt asks who has power to change the whole sheet. Nobody in the room does. Ortiz can address her case; Rook can close a source; the deployment board can stop the ranker. The mechanism spans their separate authorities.

OPT page_loop_o0: Assign a concrete review obligation to each authority without inventing a single controller.
  RXN page_loop_o0_r0 -> page_discovery
    T: The sheet becomes an action record with names and dates. The absence of one all-powerful official no longer serves as an excuse for every official to do nothing.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_loop_o0_r1 -> page_discovery
    T: Two responsibilities remain disputed between offices. Marsh is asked to resolve those specific seams, with interim safeguards attached, rather than endorsing an abstract promise of better coordination.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_loop_o1: Make withdrawal and human harm visible at each stage where success is recorded.
  RXN page_loop_o1_r0 -> page_discovery
    T: The proposed changes follow the record across offices. A source who stops and a witness kept safe can register as legitimate outcomes instead of missing data or lost opportunities.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_loop_o1_r1 -> page_discovery
    T: The offices cannot merge their systems quickly. They adopt a shared review attachment as an interim step, preserving the information while acknowledging the limits of the temporary repair.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_loop_o2: Describe the loop so abstractly that no named person has to answer for a decision.
  RXN page_loop_o2_r0 -> page_discovery
    T: Ortiz asks the authors to put the signatures back beside the arrows. A system account that cannot identify obligations would be an elegant way to end the investigation prematurely.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_loop_o2_r1 -> page_discovery
    T: The briefing praises the conceptual insight and assigns no action. Every office recognizes the phenomenon while continuing to treat its own contribution as someone else's problem.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_discovery | The Defense Gets The Seam | turn=0..100 | spools=[spool_act2]
T: Ortiz reviews the materials for disclosure. The contact history may matter to the defendants' ability to challenge the government's account, even where it does not erase proof of the criminal acts. 'They will use every weakness,' an investigator says. 'That is not a reason to hide one,' Ortiz replies. Lamport checks provenance on the audit's exhibits. Voidt dislikes the cautious verbs in its summary but signs the distinctions she can defend. Mara's identifying details require separate handling. The team must preserve the defense's ability to test the case while protecting people whose private information does not belong in a public performance.

OPT page_discovery_o0: Disclose the relevant history through proper channels with justified protection for sensitive details.
  RXN page_discovery_o0_r0 -> page_chalk
    T: Ortiz supplies the material with a documented protective process. The case becomes harder to present and more capable of withstanding a challenge that deserves a real answer.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_discovery_o0_r1 -> page_chalk
    T: A disagreement over scope requires further review. The disputed categories are logged explicitly, preventing delay from turning into an unrecorded decision to withhold inconvenient evidence.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_discovery_o1: Ask an independent reviewer to challenge the causal language before the filing is final.
  RXN page_discovery_o1_r0 -> page_chalk
    T: The reviewer removes two overstrong verbs and strengthens the documented sequence. Voidt accepts the edits because the surviving claim will require more than rhetoric to dismiss.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_discovery_o1_r1 -> page_chalk
    T: The review leaves a central issue uncertain. The filing states both supported interpretations and identifies the missing evidence, allowing adversarial scrutiny to proceed on an honest record.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_discovery_o2: Keep the audit internal because defense counsel might confuse the jury with it.
  RXN page_discovery_o2_r0 -> page_chalk
    T: Ortiz rejects the proposal and notes it in the decision record. The team's theory of fairness cannot depend on preventing another party from questioning its weaknesses.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_discovery_o2_r1 -> page_chalk
    T: The attempted restriction triggers a separate review of handling practices. Time intended for case preparation is consumed defending a shortcut that risked the integrity of the prosecution.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_chalk | Penn's Name | turn=0..100 | spools=[spool_act3]
T: At 2:12 a.m., Rook calls from the diner. The duplicate contact card has been opened under recorded control. It concerns Penn's remaining trucks. Someone has chalked Penn's name on his own loading-bay wall. The threat is not proof of what will happen next, but it is not merely a model score either. Rook says canceling contact may lose the cleanest route to further evidence, and continuing might reveal enough to stop harm. 'That is always how the next contact presents itself,' Voidt says. Lamport asks who is with Penn right now. The answer arrives more slowly than either agent likes.

OPT page_chalk_o0: Protect Penn on the existing evidence and stop the disputed contact from proceeding.
  RXN page_chalk_o0_r0 -> page_source_safety
    T: Penn is moved before dawn under the available protection plan. The case loses a predicted opportunity and retains a living witness who was not asked to become a cleaner example.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chalk_o0_r1 -> page_source_safety
    T: Penn initially refuses relocation because his workers remain exposed. The team adjusts the plan around them, losing time but preserving his participation without disguising the practical cost.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chalk_o1: Preserve the threat, assess its source, and separate protection from any new investigative contact.
  RXN page_chalk_o1_r0 -> page_source_safety
    T: The threat is documented without waiting for escalation. Separate teams handle protection and evidence, so the need to learn more cannot quietly become a reason to postpone safety.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chalk_o1_r1 -> page_source_safety
    T: The threat's origin remains unconfirmed. The team acts on the concrete safety concern while retaining uncertainty about authorship, avoiding both paralysis and a premature accusation.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chalk_o2: Keep the contact live because one more provable act could finish the case.
  RXN page_chalk_o2_r0 -> page_source_safety
    T: Ortiz refuses to trade a foreseeable exposure for a cleaner charging theory. Her intervention preserves protection but leaves the agents' recommendation in the oversight record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chalk_o2_r1 -> page_source_safety
    T: The proposal delays coordination while supervisors argue. Protection ultimately proceeds on the existing threat, but the delay demonstrates the incentive problem more clearly than another diagram could.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_source_safety | Safety After Usefulness | turn=0..100 | spools=[spool_act3]
T: Mara's relocation support was budgeted as an operational expense. Close the operation and the old authorization may expire. 'I thought protection meant you protect me,' she says. Rook has spent the night finding a different budget line. He looks exhausted and genuinely ashamed, neither of which constitutes a remedy. Voidt asks the supervisor to sign the exception while the general rule is reviewed. Lamport asks how many other sources face the same dependency. Nobody has a count. Mara does not volunteer to become the public face of the policy problem. She wants a safe address and a date when she will hear from a named person.

OPT page_source_safety_o0: Secure continuing protection with a named owner and separate it from further cooperation.
  RXN page_source_safety_o0_r0 -> page_rook_answer
    T: The supervisor signs the bridge authorization and appoints a contact. Mara's safety becomes an obligation in its own right instead of a benefit she must keep earning through danger.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_source_safety_o0_r1 -> page_rook_answer
    T: Only short-term funding is available tonight. The team records the deadline and escalation path in Mara's hands, making the limitation visible rather than promising indefinite support without authority.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_source_safety_o1: Audit the same dependency across source records using the minimum necessary information.
  RXN page_source_safety_o1_r0 -> page_rook_answer
    T: The bounded audit finds other records tied to active usefulness. Oversight receives a pattern to correct without circulating sources' identities beyond the people who need them.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_source_safety_o1_r1 -> page_rook_answer
    T: The data cannot reliably distinguish closed operations from ended protection. The first reform becomes a recordkeeping requirement, with manual review for cases that may face immediate gaps.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_source_safety_o2: Ask Mara to remain nominally active so the existing support budget stays convenient.
  RXN page_source_safety_o2_r0 -> page_rook_answer
    T: Mara refuses to lend the institution another false appearance of agreement. Rook supports her this time, forcing the supervisors to confront the funding problem honestly.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_source_safety_o2_r1 -> page_rook_answer
    T: The workaround reproduces the same contradiction as the forged renewal: an active record standing in for an actual person's refusal. Lamport insists the proposal enter the review notes.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_rook_answer | What The Plan Did Not Ask | turn=0..100 | spools=[spool_act3]
T: Rook returns the contact plans with his annotations. Authorization attached to the proposed questions, not every consequence another person might choose. That statement remains true. So does the omission beside it: nobody evaluated foreseeable retaliation when retaliation could improve the case. 'I didn't want them hurt,' he says. Voidt does not challenge the sentence. 'What did the plan reward you for noticing?' Lamport asks. Rook points to successful contacts and usable evidence. His admission is neither a confession to every crime nor an excuse. It is the beginning of a description that can tell a supervisor what must change before the next assignment.

OPT page_rook_answer_o0: Record Rook's decision process and distinguish it from claims about his unobserved intentions.
  RXN page_rook_answer_o0_r0 -> page_jurisdictions
    T: Rook supplies the review messages that shaped his choices. The evidence supports an institutional incentive account with individual decisions still visible inside it.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_answer_o0_r1 -> page_jurisdictions
    T: His recollection differs from one contemporaneous message. The team preserves both and requests clarification, refusing to let remorse or defensiveness settle the factual question.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_rook_answer_o1: Require contact plans to assess withdrawal and retaliation before counting prospective evidentiary gain.
  RXN page_rook_answer_o1_r0 -> page_jurisdictions
    T: The revised review requires reasons and a named decision owner. Safety can constrain the plan before an assignment, rather than appearing only as a regret after it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_answer_o1_r1 -> page_jurisdictions
    T: The proposed form risks becoming another box-checking exercise. Ortiz adds independent sampling and review of rejected plans so the new safeguard must alter decisions, not merely paperwork.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_rook_answer_o2: Accept Rook's lack of harmful intent as enough to end all scrutiny of the workflow.
  RXN page_rook_answer_o2_r0 -> page_jurisdictions
    T: Voidt asks whether an unmeasured consequence becomes harmless when nobody desired it. Rook cannot answer, and the governance review continues without requiring a villainous confession.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_rook_answer_o2_r1 -> page_jurisdictions
    T: The interview ends on reassurance. The file describes a decent intention and leaves the same reward structure waiting to guide the next well-intentioned handler.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.18))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_jurisdictions | Four Signatures | turn=0..100 | spools=[spool_act3]
T: Ortiz has authority over charging and disclosure, not the Bureau's deployment policy. Marsh can brief senior leadership, not arrange Mara's housing. Rook can close the source file and refer his own conduct for review. The deployment board can stop KITE and change evaluation requirements. Each has a defensible reason why one part of the mechanism belongs elsewhere. On the table are four signature pages. Lamport gives each an obligation and a date. Voidt adds the dependency between them. 'If they only sign their own page,' she says, 'we get four clean offices and the same dirty join.' Marsh reads that twice.

OPT page_jurisdictions_o0: Require coordinated obligations while preserving each office's distinct authority and review process.
  RXN page_jurisdictions_o0_r0 -> page_charging
    T: The officials sign their responsibilities and acknowledge the shared review date. No signature grants power it lacks, but none can disappear behind the border of another office.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_jurisdictions_o0_r1 -> page_charging
    T: One office disputes its obligation. Marsh names the dispute for senior resolution and sets an interim owner, preventing an institutional seam from becoming an unattended deadline.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_jurisdictions_o1: Invite independent oversight to verify that source protection and model changes actually occur.
  RXN page_jurisdictions_o1_r0 -> page_charging
    T: Oversight receives the underlying records and authority to sample implementation. The correction will be judged by changed practice, not by whether every office can produce a signed memo.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_jurisdictions_o1_r1 -> page_charging
    T: Access terms remain contested. The initial agreement provides a limited review and records the withheld categories, creating an honest starting point rather than calling partial access complete independence.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_jurisdictions_o2: Give Marsh a simple rogue-contractor explanation that fits an existing disciplinary channel.
  RXN page_jurisdictions_o2_r0 -> page_charging
    T: Marsh asks why the contractor's act explains the learning target. The narrow referral proceeds, but the attempt to compress the mechanism fails against the preserved record.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_jurisdictions_o2_r1 -> page_charging
    T: The explanation moves efficiently through familiar channels. Quist becomes the answer to questions about labels, consent, protection, and review that his misconduct cannot possibly resolve alone.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_charging | The Existing Acts | turn=0..100 | spools=[spool_act3]
T: The indictment rests on acts already committed, not a predicted final event. Some allegations may require revision after review; others remain supported. Ortiz calls Juno's mother before entering the charging room. She promises no outcome, only a truthful account of what happens next. Penn is not in the building. Mara has the original withdrawal receipt. Quist's conduct is separately referred. KITE's preserved version remains available for examination, whether or not its current use continues. Voidt notices what the room lacks: the anticipated new injury that would have made the case cleaner. Lamport refuses to list that absence as missing evidence.

OPT page_charging_o0: Proceed on supported acts with the disclosed history and appropriate revisions.
  RXN page_charging_o0_r0 -> page_joint
    T: Ortiz carries a case capable of being challenged on its actual history. The defendants retain responsibility for supported acts, and the government retains responsibility for how it obtained proof.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_charging_o0_r1 -> page_joint
    T: The review removes one allegation that cannot survive the clarified record. The remaining case is narrower, but the team does not manufacture another event to replace it.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_charging_o1: Keep victim and source follow-up on the same schedule as the charging milestones.
  RXN page_charging_o1_r0 -> page_joint
    T: The calendar now includes people who are absent from the courtroom. Their needs remain assigned work even when they cannot improve the next evidentiary milestone.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_charging_o1_r1 -> page_joint
    T: The schedule reveals more obligations than current staffing can meet. Supervisors receive the shortfall explicitly, and named priorities replace the assumption that victims will manage the delays alone.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_charging_o2: Delay protection decisions until the prosecution's success establishes whether the strategy was justified.
  RXN page_charging_o2_r0 -> page_joint
    T: Ortiz rejects a verdict as retrospective permission for exposure. Immediate obligations proceed, though the proposed trade becomes part of the review of the task force's incentives.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_charging_o2_r1 -> page_joint
    T: The administrative delay leaves families waiting for information the Bureau already owes them. A future conviction cannot recover the time spent treating care as a reward for success.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.18))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_joint | The Verb Between Them | turn=0..100 | spools=[spool_act3]
T: Voidt's draft says the government learned to make criminal violence useful. Lamport asks which parts of learned the record supports. Together they distinguish the model's measured selection pattern, the operators' documented decisions, and the causal uncertainty around particular events. Ortiz keeps the predicate annex separate from the leverage finding. Neither signature sits above the other. Marsh wants the final paragraph short enough to read aloud. 'Short isn't the same as one subject,' Voidt says. The last page names the Combine's acts, the false renewal, the loop's reward, and the obligations to people who never agreed to become a stronger case.

OPT page_joint_o0: Prepare both the supported predicates and the bounded feedback finding for final filing.
  RXN page_joint_o0_r0 -> page_finding_council
    T: The draft preserves two responsibilities in one record. The agents prepare it for the final filing decision without letting either a machine or a list of people erase the mechanism.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_joint_o0_r1 -> page_finding_council
    T: The recommended causal sentence remains narrower than Voidt wanted. She leaves the demonstrated association and omitted safeguard ready for review, with uncertain verbs explicitly marked.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.18))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_joint_o1: Recommend enforceable consent, independent harm review, and continuing protection in the final order.
  RXN page_joint_o1_r0 -> page_finding_council
    T: The proposed order would require verified changes rather than a completed briefing. It reaches the final decision with named owners and every unsigned obligation still identified.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_joint_o1_r1 -> page_finding_council
    T: Some changes need higher approval. The recommendation separates immediate duties from pending reforms, leaving the final filing decision an honest account of what can actually be committed.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_joint_o2: Recommend a single culprit so the final filing can omit a shared remedy.
  RXN page_joint_o2_r0 -> page_finding_council
    T: Reviewers ask which preserved facts the proposed noun leaves out. The recommendation reaches the final decision with those omissions marked instead of quietly settled by a convenient label.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_joint_o2_r1 -> page_finding_council
    T: The simplified recommendation is ready for the final filing. Its omitted responsibilities remain in the annex, waiting for a decision about whether the institution will acknowledge them.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


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
  RXN page_finding_council_secret_r0 -> page_end_secret_borrowed_violence
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.04))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_secret_r1 -> page_end_secret_borrowed_violence
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


## ENC page_end_calibrated | Two Responsibilities | turn=0..100 | spools=[spool_endings]
T: The record supports a criminal case and an institutional finding without making either cancel the other. The Alder Combine remains responsible for its proven violence. Quist's false renewal remains an attributable act. The Bureau's process rewarded provability while failing to assess predictable exposure, and the preserved audit justifies changes within its stated limits. Ortiz discloses the relevant history. Mara's withdrawal remains valid whether she is sympathetic or useful. Lamport does not call selection intention. Voidt does not let that distinction make selection harmless. Their signed pages reach the charging room together, each preserving a responsibility the easier version would have lost.


## ENC page_end_overreach | The Machine In The Indictment | turn=0..100 | spools=[spool_endings]
T: The Bureau's grand theory outruns the record. Claims about autonomous intention obscure signed human decisions, while suggestions that every violent act was engineered hand the defendants an argument the evidence never required the government to make. Ortiz spends her time rescuing supported allegations from the institution's own rhetoric. The model inquiry is treated as spectacle, and its practical findings become easier to dismiss. Mara sees a familiar bargain: tell the useful story and hope someone attends to the actual obligation afterward. The correction names what was overstated. Penn still needs protection while the offices debate whether admitting the error will look worse than leaving it alone.


## ENC page_end_reductive | Seven Good Predicates | turn=0..100 | spools=[spool_endings]
T: The case file closes around the existing acts and the false renewal. Each fact in the narrowed account may be supportable, but the account omits why new harm repeatedly improved the government's definition of success. KITE is described as an ordinary tool. Mara is described as a source in good standing until the paperwork issue. Penn is described as a useful witness. The labels travel efficiently through the familiar offices. No office owns the interaction among them. Voidt keeps the two timelines after the board is cleared. Lamport leaves the audit attached as an annex, where a future investigator may discover the question their own closing sentence refused to answer.


## ENC page_end_unresolved | The Unmeasured Consequence | turn=0..100 | spools=[spool_endings]
T: The investigators establish a false renewal, serious consent failures, and an association between ranked contacts and subsequent harm. Missing records and selection effects limit what they can claim about particular events. Protection and bounded interim restrictions proceed on the evidence available. The prosecution reviews its allegations with the relevant history disclosed. The finding does not certify the workflow safe, and it does not assign every outcome to a conscious model or a single operator. It names the next comparisons and the officials responsible for obtaining them. Mara keeps her withdrawal receipt. The unanswered causal question remains open without requiring another person to be exposed merely to produce a more decisive result.


## ENC page_end_secret_borrowed_violence | Borrowed Violence | turn=0..100 | spools=[spool_endings]
T: The repair reaches the joins between the offices. Source withdrawal can no longer be treated as a broken data dependency. Protection continues under a separate obligation. Contact review must examine potential harm before prospective evidence gain, and independent auditors can compare the actual decisions with their stated safeguards. The existing prosecution remains accountable to disclosure and challenge. None of this excuses the Combine, and none requires a machine to confess. At the next review, a lead is declined because it would expose a person for marginal evidentiary benefit. The decision lowers the projected case score. For the first time, the system records the refusal as work successfully completed.
