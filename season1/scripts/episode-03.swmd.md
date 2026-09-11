---
title: "Thought Leader — 3. Guided"
version: ""
storyworld_id: "THOUGHTLEADER-S1-DRAFT-20260911-EP03"
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
    type: "failure"
    condition: "true"
    description: "The filing refers the forged licence, misleading solicitation, disputed identity assertions, and documented coercive conduct for the appropriate focused inquiries. It preserves ..."
    expected_critic_score: -1
  - id: "page_end_overreach"
    type: "terminal"
    condition: "true"
    description: "The filing treats the shared wallet, feed audience, ordinary gathering, and manipulative Circle as one directed entity. A translator becomes a foreign link; a donor becomes a me..."
    expected_critic_score: 0
  - id: "page_end_reductive"
    type: "terminal"
    condition: "true"
    description: "The final finding correctly rejects the claim that ordinary worship is a security offense, then wrongly treats that conclusion as a reason to close the entire case. The forged l..."
    expected_critic_score: 0
  - id: "page_end_secret"
    type: "success"
    condition: "true"
    description: "The final filing authorizes two concrete follow-ups: qualified civilian review of the outstanding venue risks, and a community-led correction process for the forged authority. E..."
    expected_critic_score: 1
  - id: "page_end_unresolved"
    type: "terminal"
    condition: "true"
    description: "The bureau cannot identify a complete authorial chain behind the feed or determine every contributor's knowledge. The abandoned account remains a gap, and the feedback evidence ..."
    expected_critic_score: 0
---

# SWMD-0
id: THOUGHTLEADER-S1-DRAFT-20260911-EP03
title: Thought Leader — 3. Guided
theme: dark
about: Eleven deaths at a crowded fairground lead Voidt and Lamport through a shared feed, forged scholarly authority, and a manipulative circle presenting itself as the privileged interpreter of Mahdi signs. The community has its own knowledge, disagreements and capacity to act; the investigation must distinguish fraud and coercive conduct from Muslim life and Mahdi beliefs generally.

Season 1 reconstruction draft. Newly structured draft adapted from recovered episode-03 prose, with new scenes and all-new choice mechanics and endings. The named Guided Circle and Leila are reconstruction devices that make manipulative cult conduct distinct from legitimate religious gathering, community guidance, and Mahdi beliefs. No theological verdict is implied by investigating forged authority, coercive exclusion, misleading fundraising, or dangerous venue conditions. Original terminal prose was not recovered.
cast: char_bureau, char_voidt, char_lamport
props: Evidence, Ascription, Consent, Pressure, Trust, Mandate, Care, Restraint
spools:
  spool_act1: page_hall page_ground page_yusuf page_feed page_clock page_scholar
  spool_act2: page_chain page_circle page_wallet page_signer page_signal page_family
  spool_act3: page_measurements page_seams page_designation page_correction page_organizers page_case_close page_finding_council
  spool_endings: page_end_calibrated page_end_overreach page_end_reductive page_end_unresolved page_end_secret

## ENC page_hall | The Hall Remains Open | turn=0..100 | spools=[spool_act1]
T: Sister Nawal asks the agents to move their chairs so people can reach the kettle. The hall has been here longer than the feed, the investigation, or the plywood box where people leave private prayer requests. It is still open after eleven people died at the fairground.

Rima Bazzi places a photograph of her sister Rana on the table. It is not a still from the widely reposted recording of her death.

'Use this one when you need to remember who you're asking about,' she says.

Voidt turns the photograph toward both agents. Lamport closes the video window. The next large gathering is approaching, and the case begins with more than one duty.

OPT page_hall_o0: Let Rima define the questions and image-use limits she wants recorded.
  RXN page_hall_o0_r0 -> page_ground
    T: Rima asks how Rana heard about the gathering and who can stop the repeated circulation of her final moments. She authorizes the photograph for the case file only. Lamport records the limits separately from the questions.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_hall_o0_r1 -> page_ground
    T: Rima wants answers before another interview about her wishes. Voidt acknowledges the repeated burden and takes only the questions she volunteers. The photograph stays with the family.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_hall_o1: Begin with the fairground records and a separate plan for the next event.
  RXN page_hall_o1_r0 -> page_ground
    T: The county supplies its incident findings and venue contacts. The agents separate the past-causation inquiry from immediate safety work. Nawal offers introductions to organizers who have already been asking for practical help.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_hall_o1_r1 -> page_ground
    T: The county's first packet repeats a summary without source records. Lamport requests the underlying measurements. The next-event safety discussion proceeds independently of that delay.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_hall_o2: Ask whether a Mahdi cult directed the gathering.
  RXN page_hall_o2_r0 -> page_ground
    T: Nawal distinguishes the small Guided Circle's demands from the wider community and its varied beliefs. 'Ask who pressured whom to do what,' she says. Voidt writes the narrower question down.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_hall_o2_r1 -> page_ground
    T: Nawal asks which people the agents mean by cult. The room goes quiet. Lamport clarifies that belief and attendance establish no misconduct, then asks about specific reported demands and named incidents.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_ground | The West Gate | turn=0..100 | spools=[spool_act1]
T: The fairground's gate was designed for a different kind of event. The county reconstruction describes crowd compression, obstructed sightlines, and people behind the bottleneck unable to know what was happening ahead. Eleven people died. There is no evidence that the attendees attacked one another.

Voidt studies the approach from the back of the field. Lamport reads the venue correspondence. Warning signs were visible in scattered places, but no shared estimate reached someone responsible for the exits.

'A crowd is made of decisions,' Voidt says.

'And a safe venue can't require every person inside it to see the whole crowd,' Lamport answers. The failure has physical dimensions before it has a theory of influence.

OPT page_ground_o0: Reconstruct the physical failure with qualified civilian safety staff.
  RXN page_ground_o0_r0 -> page_yusuf
    T: Venue staff identify the failed handoff between attendance expectations and exit planning. The analysis does not require treating worshippers as perpetrators. It produces questions the next venue can answer before opening.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_ground_o0_r1 -> page_yusuf
    T: The original attendance estimate cannot be recovered reliably. The safety team works with a range and clearly marks assumptions. The uncertainty widens the safety margin rather than delaying every practical recommendation.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_ground_o1: Collect voluntary accounts from survivors about what they could see and hear.
  RXN page_ground_o1_r0 -> page_yusuf
    T: Survivors describe contradictory impressions from different positions. Lamport records those positions instead of trying to make the memories identical. The accounts explain how danger could be real and invisible to many people inside it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_ground_o1_r1 -> page_yusuf
    T: Several survivors decline another recounting. The team uses existing authorized statements and leaves a correction channel open. Voidt will not make recovery contingent on performing the worst evening again.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_ground_o2: Treat the synchronized arrival as evidence of an intentional crowd trap.
  RXN page_ground_o2_r0 -> page_yusuf
    T: The hypothesis is tested against traffic counts, which show staggered arrivals. Lamport keeps possible influence in scope while rejecting an unsupported claim that all attendees followed a single timed order.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_ground_o2_r1 -> page_yusuf
    T: A draft calls the gathering a trap before any evidence establishes that intention. Rima objects to the suggestion that Rana walked blindly into an order. Voidt revises the caption to the observed failure.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_yusuf | The Ninth Interview | turn=0..100 | spools=[spool_act1]
T: Yusuf has told versions of this story to the county, reporters, a family lawyer, and a stranger he no longer believes was an official. He forwarded the text that Rana read. He has never denied doing so.

'It had Professor Haidari's seal. I checked that she existed. I thought that meant I had checked it.'

He sets his phone on the table without unlocking it. Lamport explains that a voluntary interview can stop, the phone remains Yusuf's, and any copying needs a defined scope.

Voidt asks what the earlier summaries got wrong. Yusuf takes out a page of corrections. He has been preparing to be believed accurately.

OPT page_yusuf_o0: Record Yusuf's corrections before asking for the attachment.
  RXN page_yusuf_o0_r0 -> page_feed
    T: Yusuf distinguishes forwarding from authorship and his own belief from anyone else's reason for attending. He then shares the attachment and its timestamp. The corrections remain attached to the copied record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_yusuf_o0_r1 -> page_feed
    T: Yusuf corrects the summary but declines a phone copy today. Lamport accepts the page and explains how to provide the attachment later. The interview still repairs an inaccurate institutional account.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_yusuf_o1: Ask Yusuf whether he wants to contact the previous sender with everyone disclosed.
  RXN page_yusuf_o1_r0 -> page_feed
    T: Yusuf names each person in the room before calling Bilal. Bilal asks questions and then agrees to share the original attachment. The new link in the chain begins after explicit permission.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_yusuf_o1_r1 -> page_feed
    T: Yusuf prefers to ask Bilal privately whether he wants contact. The agents leave a written explanation of the request. They do not turn friendship into undisclosed recruitment for the investigation.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_yusuf_o2: Press Yusuf for the names of everyone who received his forward.
  RXN page_yusuf_o2_r0 -> page_feed
    T: Yusuf asks what each name would prove. Lamport narrows the request to the provenance chain. The change preserves a useful interview without compiling a list of people whose shared act was receiving a message.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_yusuf_o2_r1 -> page_feed
    T: Yusuf locks his phone and asks for the request in writing. Nawal sits beside him. The bureau can pursue appropriate records through proper process, but this voluntary conversation is over.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_feed | Three True Things | turn=0..100 | spools=[spool_act1]
T: The feed publishes short factual items: a reservoir measurement, a local recovery, a plant flowering earlier than usual. Sampled claims can be traced to ordinary public sources. Their selection and placement invite connections the individual statements do not explicitly make.

Archived pages show that ordering changes after some items are widely shared. The words often stay the same.

'People supply part of the selection process,' Voidt says.

Lamport examines the archive dates. 'Then we describe that loop. We don't need to call every reader controlled.'

For some readers the feed is comforting background. For the Guided Circle, selected combinations are presented as privileged signs that should overrule doubt.

OPT page_feed_o0: Compare archived ordering, source facts, and sharing patterns separately.
  RXN page_feed_o0_r0 -> page_clock
    T: The comparison supports a feedback relationship between sharing and later adjacency. It does not establish a single author of every interpretation. Lamport can describe amplification without converting readers into a machine's passive components.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_feed_o0_r1 -> page_clock
    T: The archive misses several intervals, so the timing cannot always be ordered confidently. Voidt preserves the supported examples and labels the larger frequency estimate unknown. The mechanism remains plausible rather than universal.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.06))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_feed_o1: Ask different readers how they use the same feed.
  RXN page_feed_o1_r0 -> page_clock
    T: One reader follows the nature items; another shares them as encouragement; a third rejects the Circle's interpretation. Their differences make clear that the feed's audience and the manipulative group are not interchangeable.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_feed_o1_r1 -> page_clock
    T: Readers ask why ordinary use now needs explaining to agents. Voidt limits participation to volunteers and accepts Nawal's existing account of community disagreement. The inquiry stops short of treating reading as a suspect act.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.08))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_feed_o2: Describe the feed as an autonomous prophecy engine.
  RXN page_feed_o2_r0 -> page_clock
    T: Aldunate translates the phrase into observable claims about selection, response, and amplification. Only some are presently supported. The more exact description gives the team a method to test rather than a metaphor to repeat.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_feed_o2_r1 -> page_clock
    T: The phrase reaches a partner briefing and makes ordinary religious interpretation sound like evidence of compromised judgment. Nawal objects. Lamport replaces it with the specific ordering behavior the archive actually shows.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_clock | The Slot at the Bottom | turn=0..100 | spools=[spool_act1]
T: The prayer-time application was written by a small team and now belongs to a holding company. Its ordinary utility works. The disputed feed occupies a paid syndication slot at the bottom of the screen. The slot's purchaser is recorded in a billing system separate from the application's core service.

'The app is useful,' Nawal says. 'That is not a defense of the card.'

Lamport asks the provider what users were told about the publisher and whether the slot can be disabled independently. Voidt asks what trust the surrounding interface lent to an unrelated message. Neither question requires interfering with the people using it to organize their day.

OPT page_clock_o0: Trace the syndication purchaser and the slot's disclosure controls.
  RXN page_clock_o0_r0 -> page_scholar
    T: Billing records connect the slot to the public donation wallet. The provider identifies a missing publisher label and a separate disable control. The service and the disputed content can be examined independently.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_clock_o0_r1 -> page_scholar
    T: The provider can identify the payment processor but lacks a verified beneficial publisher. Lamport records that gap without assigning it to the app's developers. The next request follows the purchaser record.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_clock_o1: Work with users on a clear publisher label and optional feed control.
  RXN page_clock_o1_r0 -> page_scholar
    T: Users ask for a visible publisher identity and an easy way to remove the card without losing prayer times. The provider agrees to review the change. Community members define what useful transparency looks like.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_clock_o1_r1 -> page_scholar
    T: The provider offers a long policy link that users cannot connect to a particular card. Nawal demonstrates the problem on her own phone. The review returns to the screen where the trust was borrowed.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_clock_o2: Seek removal of the whole application as the suspected distribution channel.
  RXN page_clock_o2_r0 -> page_scholar
    T: The responsible reviewer asks why the core service must be affected when the slot is separable. Lamport narrows the request to the disputed publisher and evidence preservation. The ordinary utility remains outside the complaint.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_clock_o2_r1 -> page_scholar
    T: Nawal points out that the proposal would burden millions of people uninvolved with the Circle. Voidt withdraws the blanket request. A channel's reach does not give every user the same role in a case.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_scholar | Who Says So | turn=0..100 | spools=[spool_act1]
T: Zaynab Haidari has already documented the forged teaching licence in a community scholarly discussion. The bureau is months late to the discovery. She places the false licence beside a genuine record of her own authority to transmit a text.

'The question is who says so, and how you inspect that claim,' she says.

The forgery carries her name and seal but asserts an impossible teacher relationship. Nineteen saved versions retain the same seal while the surrounding language shifts.

Haidari explains the evidence patiently and then states her boundary: 'You may investigate the misuse of my authority. You may not make me the person who licenses everybody else's belief.'

OPT page_scholar_o0: Document the forged attribution under Haidari's stated scope.
  RXN page_scholar_o0_r0 -> page_chain
    T: Haidari authenticates the comparison images and identifies the impossible claim. Lamport records her as the authority on her own licence and the consulted scholarly method, not as a government-certified representative of all believers.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_scholar_o0_r1 -> page_chain
    T: Haidari approves a limited comparison but withholds private correspondence. The visible records still establish the false attribution. Voidt records the evidentiary scope without treating access to everything as the price of credibility.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_scholar_o1: Ask how the community detected the forgery before the bureau did.
  RXN page_scholar_o1_r0 -> page_chain
    T: Haidari shows the dated review and the corrections readers supplied. The method is ordinary scholarship performed by qualified people. Lamport cites the community work rather than rediscovering it under the agency's name.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.16))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_scholar_o1_r1 -> page_chain
    T: Haidari asks whether the question seeks a usable method or a flattering anecdote. Voidt answers by offering the draft attribution for her review. The conversation resumes on a more concrete basis.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_scholar_o2: Ask Haidari to declare the Circle's Mahdi claims fraudulent as a whole.
  RXN page_scholar_o2_r0 -> page_chain
    T: Haidari refuses the theological assignment and identifies the forged document instead. 'That is enough to investigate this act,' she says. Lamport agrees, keeping the complaint within a question the bureau can properly assess.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_scholar_o2_r1 -> page_chain
    T: Haidari closes the book and asks the agents to state their remit again. The interview resumes only after they distinguish investigating impersonated authority from selecting acceptable religious interpretations.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_chain | Forwarded Without Its Hands | turn=0..100 | spools=[spool_act2]
T: The available message history passes through several identifiable people and then reaches an abandoned account. Each known sender preserved a different portion of the attachment. The scholarly chain was cropped away while the seal remained.

'It kept the appearance of a receipt and removed the part you could check,' Haidari says.

Lamport recognizes a familiar attestation problem in an older intellectual practice. His recognition does not make it his discovery.

Voidt asks which version each sender saw before deciding to forward. A forwarding chain can explain transmission. It does not establish that every person in it knew the licence was false or accepted the Circle's interpretation.

OPT page_chain_o0: Build a version history with each sender's actual view and uncertainty.
  RXN page_chain_o0_r0 -> page_circle
    T: The history distinguishes original attachments from screenshots and later crops. One sender's apparent omission occurred before they received the image. The correction prevents a platform transformation from becoming an invented act of concealment.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chain_o0_r1 -> page_circle
    T: The abandoned account leaves a genuine break in provenance. Lamport preserves the known chain without guessing at the missing author. The forgery remains demonstrable even though its complete route does not.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.08))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chain_o1: Let Haidari's team show readers how to inspect the chain themselves.
  RXN page_chain_o1_r0 -> page_circle
    T: The team prepares a simple comparison retaining the source images and attribution. Readers can verify why this licence fails. The explanation supplies a method instead of asking them to trust a new institutional voice.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chain_o1_r1 -> page_circle
    T: Haidari asks to delay distribution until a disputed annotation is corrected. Aldunate respects the pause. The method gains credibility by showing that correction can travel toward the authors as well as away from them.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_chain_o2: Treat the abandoned account as evidence of a single hidden organizer.
  RXN page_chain_o2_r0 -> page_circle
    T: A technical reviewer lists several explanations for the abandoned account and asks for discriminating records. The team pursues those records. Concealment remains possible without being smuggled into the chronology as fact.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_chain_o2_r1 -> page_circle
    T: The proposed organizer acquires motives in the draft despite still lacking an identity. Voidt removes the invented biography. A gap in a chain is a gap, even when a person-shaped story would be convenient.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_circle | The Price of Doubt | turn=0..100 | spools=[spool_act2]
T: Leila Farouq meets the agents with a support worker she chose. She still prays at Nawal's hall. Leaving the Guided Circle did not mean leaving her faith.

The Circle presented itself as the privileged interpreter of Mahdi signs and used the disputed licence to demand deference. Leila shows messages tying access to its private aid network to donations, silence about doubts, and repeated displays of loyalty.

'They said a question meant I was abandoning everyone,' she says. 'The hall said I could come for tea anyway.'

Voidt records the actual demands. Lamport separates them from the beliefs the Circle invoked. The word cult becomes useful only where it points to conduct they can describe.

OPT page_circle_o0: Document the specific coercive demands and Leila's chosen support needs.
  RXN page_circle_o0_r0 -> page_wallet
    T: Leila approves copying selected messages and asks for help correcting a false claim about why she left. Her support worker retains the contact plan. The investigation does not require her to surrender control of recovery.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_circle_o0_r1 -> page_wallet
    T: Leila describes the pressure but does not yet want her messages copied. Lamport records a limited account and explains future options. Her continued religious practice is not entered as doubt about her complaint.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_circle_o1: Compare the Circle's fundraising claims with the forged licence and actual aid records.
  RXN page_circle_o1_r0 -> page_wallet
    T: A solicitation reproduces Haidari's forged licence and promises a form of oversight she never provided. Leila's records identify a concrete false representation. Whether every donation was induced by it requires separate evidence.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_circle_o1_r1 -> page_wallet
    T: The records show genuine aid alongside misleading authority claims. Voidt preserves both. Performing some useful work does not make the forgery true, and the forgery does not mean every recipient imagined receiving help.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_circle_o2: Ask Leila to publicly warn everyone who holds similar beliefs.
  RXN page_circle_o2_r0 -> page_wallet
    T: Leila offers a narrower warning about the Circle's documented demands if she can review it first. She refuses to speak for a whole tradition. Voidt accepts those terms without bargaining for a larger audience.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_circle_o2_r1 -> page_wallet
    T: Leila says the request sounds like another institution turning her experience into a loyalty test. The support worker ends the meeting. Lamport sends a written correction of the bureau's scope through the agreed contact.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_wallet | Transparent Money | turn=0..100 | spools=[spool_act2]
T: The donation ledger is public. It shows small gifts, hosting bills, translation invoices, and payments to a reseller of platform-verified accounts. Openness makes the transfers inspectable; it does not explain every donor's understanding or every purchaser's knowledge.

The reseller's records identify reused verification bundles. The people originally verified were not necessarily the people operating the later accounts. It is an attestation problem the bureau can investigate whether or not this is their first encounter with it.

Haidari's forged licence appears in a solicitation associated with the wallet. Lamport marks two concrete seams: the false scholarly attribution and the false assertions of human account control. Ordinary donations remain a different category.

OPT page_wallet_o0: Trace the two disputed acts without building a list of ordinary donors.
  RXN page_wallet_o0_r0 -> page_signer
    T: The trace connects the solicitation and reseller payment to records with identifiable custodians. It leaves ordinary donor identities outside the working dataset. The account grows more actionable as its scope becomes more exact.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_wallet_o0_r1 -> page_signer
    T: A processor can verify the transfer but not the purchaser's claimed role. Lamport records that limitation and requests the next link. The public ledger does not magically disclose facts it never contained.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_wallet_o1: Offer a donor-readable explanation of the disputed claims and refund questions.
  RXN page_wallet_o1_r0 -> page_signer
    T: The draft distinguishes donating to legitimate community work from relying on a forged endorsement. Donors can ask about their own gifts without declaring their beliefs for the bureau. Haidari reviews the attribution language.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_wallet_o1_r1 -> page_signer
    T: The proposed notice implies every donor was deceived in the same way. Nawal corrects it with examples of unrelated gifts. Voidt revises the explanation to the particular solicitation and the evidence supporting the dispute.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_wallet_o2: Treat the common wallet as proof of a single criminal organization.
  RXN page_wallet_o2_r0 -> page_signer
    T: The financial reviewer rejects the inference from one address alone. Shared infrastructure may serve different purposes and participants. Lamport returns the focus to the purchases and false claims the records can distinguish.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_wallet_o2_r1 -> page_signer
    T: A partner team begins mapping ordinary donors as members. Voidt stops distribution of the classification and requests a correction. Transparency has become a source of exposure because the bureau supplied an unsupported noun.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_signer | The Missing Signature | turn=0..100 | spools=[spool_act2]
T: Nabil is an adult volunteer who helps approve wallet transactions. He read the trust terms before joining and can explain why the work matters to him. His mother waits in the hallway because she wants to be nearby, not because he lacks the right to answer.

A fellow signer's name remained in the interface after that person died. The recorded approvals continued. Nabil did not know the death had occurred.

'I trusted the clearance because it kept clearing,' he says.

Lamport asks what the display actually verified. Voidt asks who was supposed to notify the remaining signers when a credential no longer represented the person they believed was participating.

OPT page_signer_o0: Trace credential substitution and the notification failure.
  RXN page_signer_o0_r0 -> page_signal
    T: The technical records distinguish a valid cryptographic approval from the unresolved identity behind it. Nabil's assumption was understandable and incomplete. The team identifies the administrator responsible for the display and credential updates.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signer_o0_r1 -> page_signal
    T: The records establish continued approvals but not how the credential changed hands. Lamport preserves the gap. Nabil is not asked to confess to knowledge the interface helped him avoid acquiring.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_signer_o1: Help Nabil pause his own participation and seek independent review if he chooses.
  RXN page_signer_o1_r0 -> page_signal
    T: Nabil chooses to suspend his approvals while the identity issue is reviewed. The suspension applies to his authority, not a government claim over his beliefs. He writes the notice in his own words.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signer_o1_r1 -> page_signal
    T: Nabil wants to remain involved to protect legitimate recipients. Voidt explains the unresolved risk and respects the decision. He requests an independent co-review rather than surrendering the work to the bureau.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_signer_o2: Suggest Nabil must have known the approvals were false.
  RXN page_signer_o2_r0 -> page_signal
    T: Nabil produces his saved questions about the interface, sent months earlier without an answer. Lamport corrects the implication of knowledge. The unanswered messages point to a different responsibility in the chain.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signer_o2_r1 -> page_signal
    T: Nabil stops the interview and asks for counsel. His mother remains in the hallway while he makes that choice himself. The agents leave with a procedural appointment instead of the explanation they had hoped to obtain.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.1))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_signal | The Question in the Box | turn=0..100 | spools=[spool_act2]
T: An archived feed item appears to answer a private prayer request left in the hall's box. It names no recipient. Nawal has already identified mundane routes by which some requests become known: people ask friends to pray, mention them over tea, or later share good news. Other connections remain unexplained.

Voidt proposes submitting a transparent, harmless test question with the hall's permission. Lamport asks what either an apparent response or silence would establish.

'Very little on its own,' she says. 'But we could preserve the route.'

Nawal points at the box. 'People use that for something before you use it for a test.'

OPT page_signal_o0: Use archived public examples and leave the private prayer box outside the test.
  RXN page_signal_o0_r0 -> page_family
    T: The review identifies several ordinary information paths and a few unresolved matches. The team reports both. A striking coincidence remains worth studying without becoming proof of hidden access or a supernatural claim.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signal_o0_r1 -> page_family
    T: The archived examples lack enough timestamps to distinguish coincidence from feedback. Lamport records the limitation. The community's private practice remains intact, and the inquiry advances through other evidence.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.08))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_signal_o1: Propose a disclosed, harmless test outside the box with a fixed protocol.
  RXN page_signal_o1_r0 -> page_family
    T: Nawal approves a separate public test channel. The protocol records what would count as a match and what would remain ambiguous. The test is scheduled; nobody treats the later case file as though a result already exists.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signal_o1_r1 -> page_family
    T: Nawal declines because the proposed test would still be mistaken for a community act. Voidt accepts the refusal and retains the archived review. The protocol does not acquire legitimacy merely because it is harmless in intent.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_signal_o2: Take the apparent answer as proof that the feed knows its readers personally.
  RXN page_signal_o2_r0 -> page_family
    T: Lamport asks for the complete information path before accepting that conclusion. Nawal supplies a public conversation that explains one match. The challenge does not explain every case, but it defeats the universal claim.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_signal_o2_r1 -> page_family
    T: The interpretation makes a mystery sound solved while leaving all its mechanisms unexamined. Voidt notices that the bureau is now doing the Circle's interpretive work for it and returns to documented routes.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.1))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_family | Who Tells Rima | turn=0..100 | spools=[spool_act2]
T: The record now supports an answer to one of Rima's questions: Rana encountered the disputed text through Yusuf's ordinary community sharing. That does not establish why she decided to attend, and it does not make Yusuf the author of the dangerous gate.

Yusuf wants to tell Rima himself. He asks whether his mother can come because their families know one another. Rima has not yet agreed to a meeting.

'We can offer,' Voidt says. 'We can't turn an answer into an appointment for both of them.'

Lamport prepares a short factual account with the unsupported assumptions removed. The emotional importance of the answer does not make its delivery an investigative entitlement.

OPT page_family_o0: Ask Rima privately whether she wants a supported conversation with Yusuf.
  RXN page_family_o0_r0 -> page_measurements
    T: Rima agrees to hear the account with her own support person present. Yusuf's mother may attend if everyone remains comfortable. The agents prepare factual corrections and leave forgiveness entirely outside the meeting's purpose.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_family_o0_r1 -> page_measurements
    T: Rima declines a meeting and asks for the account in writing. Yusuf is told that her choice is not a verdict on him. The information reaches her without demanding another encounter she did not choose.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_family_o1: Provide the factual account through the family's existing advocate.
  RXN page_family_o1_r0 -> page_measurements
    T: The advocate confirms receipt and points out one ambiguous sentence. Lamport rewrites it to distinguish forwarding from causing the death. The family can decide later whether any personal conversation would help.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_family_o1_r1 -> page_measurements
    T: The advocate says the family has already received too many partial summaries. Voidt sends the source basis and explicit limits with this one. Precision will have to do the work an institutional signature no longer can.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_family_o2: Arrange the meeting immediately so the case can offer closure.
  RXN page_family_o2_r0 -> page_measurements
    T: Nawal stops the arrangement until both parties agree. The delay protects the possibility of a useful meeting. Lamport removes the word closure from the scheduling note because the bureau cannot promise it.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_family_o2_r1 -> page_measurements
    T: Rima refuses the invitation and asks who authorized using her grief as the end of an investigation. Voidt apologizes and sends only the information she requested. The proposed narrative ending has cost trust.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_measurements | Before the Next Gate | turn=0..100 | spools=[spool_act3]
T: Sabol has been awake long enough to mistake decisiveness for a unit of time. He wants an answer before the next round of gatherings. Nawal wants somebody to return the calls already made by venue volunteers.

The civilian safety team identifies several sites needing review. Its proposed packet contains venue plans, uncertain attendance ranges, transport assumptions, and responsible local contacts. It contains no worshipper list.

'You want this meeting to help with exits,' Sabol says.

'I want the next meeting not to begin with eleven deaths,' Voidt answers.

Lamport asks for the authority that can actually move a barrier, open an accessible route, or change a venue plan. Those people do not work in this room.

OPT page_measurements_o0: Send qualified safety assessments to civilian organizers with uncertainty intact.
  RXN page_measurements_o0_r0 -> page_seams
    T: Local contacts receive the assessments and begin their own reviews. Some change plans immediately; others request clarification. The agents record responses without claiming to count injuries prevented or to command the gatherings.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_measurements_o0_r1 -> page_seams
    T: Several contacts cannot be reached before dawn. The team leaves clear requests through established civilian channels and logs unresolved sites. A partial response is reported honestly rather than presented as universal protection.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_measurements_o1: Have organizers challenge the estimates before any central map circulates.
  RXN page_measurements_o1_r0 -> page_seams
    T: Organizers correct an outdated venue plan and an exaggerated attendance estimate. The revised packet is more useful because local knowledge changes it. Each recipient can see which assumptions remain uncertain.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_measurements_o1_r1 -> page_seams
    T: Review takes longer than expected and some estimates remain disputed. Lamport sends interim safety questions that do not depend on a precise count. Waiting for a perfect map will not become the only available action.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_measurements_o2: Demand cancellation of every gathering associated with the feed.
  RXN page_measurements_o2_r0 -> page_seams
    T: Civilian officials reject the blanket premise and assess particular venue risks. Some events relocate through organizer agreement. Sabol accepts a narrower result tied to conditions rather than to shared reading or belief.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_measurements_o2_r1 -> page_seams
    T: The demand circulates as a warning against the community itself. Nawal spends the morning correcting rumors instead of arranging volunteers. Voidt records the intervention's cost and redirects the safety work to specific sites.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_seams | Everything Else Is a Different Question | turn=0..100 | spools=[spool_act3]
T: Lamport reads the supported seams from his ledger. A forged scholarly licence was used in a solicitation. Reused identity bundles supported false claims about who operated accounts. Specific Circle messages pressured people through threatened exclusion from aid and belonging. Each item needs its own proof of knowledge, responsibility, and appropriate remedy.

The fairground deaths remain a separate causal investigation with documented physical failures. The feed's sorting behavior remains an amplification question.

'And the people who just came to pray?' Voidt asks.

'Are people who came to pray,' he says. 'We don't enlarge our proof by changing their category.'

He has enough to refer concrete misconduct without inventing an organization to hold everybody.

OPT page_seams_o0: Prepare separate referrals tied to the documented acts and affected people.
  RXN page_seams_o0_r0 -> page_designation
    T: The referrals identify source records, harmed parties, and missing knowledge evidence. Haidari's attribution dispute remains distinct from donor claims and crowd safety. A receiving office can act without accepting a single theory of everything.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_seams_o0_r1 -> page_designation
    T: One office declines the broader coercion account while accepting the forgery materials. Lamport preserves the limit and routes support needs separately. A narrow institutional remit will not silently become a denial that other harms occurred.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(-0.06))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.12))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_seams_o1: Ask community reviewers to check the line between conduct and belief.
  RXN page_seams_o1_r0 -> page_designation
    T: The reviewers remove language implying that Mahdi expectations themselves explain the misconduct. They retain the documented false licence and coercive demands. The case becomes more precise because the distinction changes its text.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.16))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_seams_o1_r1 -> page_designation
    T: Reviewers disagree about the Circle's religious interpretation but agree on the forgery evidence. Voidt preserves that agreement without demanding theological consensus as the price of a civil complaint.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_seams_o2: Use the strongest misconduct to characterize the entire feed audience.
  RXN page_seams_o2_r0 -> page_designation
    T: Lamport stops the generalization at the first unsupported link. A person may read the feed, donate to the hall, and reject the Circle. The filing will require evidence about the act it attributes to each person.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_seams_o2_r1 -> page_designation
    T: The audience becomes a membership estimate in a partner document. Haidari demands a correction. The bureau's attempt to simplify the case has reproduced the very authority shortcut it learned to distrust.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.14))
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.1))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.12))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_designation | Find Me a Noun | turn=0..100 | spools=[spool_act3]
T: Marsh brings a proposed security classification that assumes a coherent organization behind the wallet, the feed, and the gatherings. Counsel has already flagged missing predicates. One overseas translator appears in the supporting chart largely because somebody wanted a foreign connection.

'They translated a public feed,' Lamport says. 'What else are we alleging?'

Nobody supplies another documented act.

Sabol asks what happens if they do nothing. Voidt lays the specific referrals and civilian safety plan beside the draft. The alternatives were never a sweeping classification or inaction. The draft would change what ordinary donors and readers encounter next, and those consequences also belong in its review.

OPT page_designation_o0: Challenge the unsupported classification and document its foreseeable effects.
  RXN page_designation_o0_r0 -> page_correction
    T: Counsel lists the unsupported links and likely burdens on uninvolved people. The proposed classification is returned for review. Specific misconduct referrals remain active, so rejecting overbreadth does not require closing the case.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_designation_o0_r1 -> page_correction
    T: The meeting keeps the proposal on the agenda despite the objections. Lamport attaches a signed limitations memo and demands the dissent travel with it. The bureau cannot control the room, but it can make responsibility visible.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_designation_o1: Offer the actionable civilian and fraud measures as the immediate response.
  RXN page_designation_o1_r0 -> page_correction
    T: Sabol assigns the immediate work to offices with actual recipients and authority. The response has fewer intelligence graphics and more returned phone calls. Its success will be measured through completed actions, not an inflated membership count.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_designation_o1_r1 -> page_correction
    T: Officials complain that the proposal lacks one coordinating label. Voidt gives them a coordinating schedule instead: source referrals, correction review, and venue contacts. The administrative inconvenience is left with the administration.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_designation_o2: Accept the broad classification to unlock additional resources.
  RXN page_designation_o2_r0 -> page_correction
    T: Lamport insists on explicit limits and separate review before any person is acted upon. The concession reduces some immediate risk but does not cure the unsupported group claim. His reservation remains attached.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_designation_o2_r1 -> page_correction
    T: The overseas translator becomes a central figure in the chart despite no new evidence. Voidt sees how an administrative prerequisite can manufacture a suspect role. The resource promise has already changed the story being told.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.18))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_correction | The Third Paragraph | turn=0..100 | spools=[spool_act3]
T: Aldunate can help publish an inspectable correction using public records. Haidari is willing to consider authorship if her conditions are met: preserve the scholarly chain, credit the community review, show the false attribution beside the genuine source, and let her review the final wording.

'If my name is doing work, use it correctly,' she says. 'Don't make it a seal on your institution.'

The correction could interrupt the Circle's borrowed authority without asking readers to abandon their beliefs. It may also attract hostile attention toward Haidari. Permission to contribute is a bounded agreement, and publication is still a decision to make rather than an event that has already occurred.

OPT page_correction_o0: Prepare the correction under Haidari's conditions for her final approval.
  RXN page_correction_o0_r0 -> page_organizers
    T: Haidari revises the third paragraph and approves the prepared wording, subject to the agreed release scope. The source images remain inspectable. Aldunate credits the earlier community work instead of presenting the correction as an agency discovery.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_correction_o0_r1 -> page_organizers
    T: Haidari withholds approval until an image caption is corrected. Aldunate pauses release and supplies a revised proof. The conditions have practical force precisely because they can stop a publication.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.12))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.12))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_correction_o1: Prepare an institutional notice limited to the documented false attribution.
  RXN page_correction_o1_r0 -> page_organizers
    T: The notice states the specific disputed claim and links only records cleared for public use. It leaves Haidari's personal account out unless she separately approves it. Readers receive a narrower correction with a checkable basis.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_correction_o1_r1 -> page_organizers
    T: The first draft implies endorsement from Haidari without her approval. Voidt removes that implication. The notice can cite evidence already cleared for use without borrowing a person's authority a second time.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.1))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_correction_o2: Release the full correction immediately because the next gathering is near.
  RXN page_correction_o2_r0 -> page_organizers
    T: Aldunate refuses to skip Haidari's final review and offers a limited factual notice in the meantime. Urgency changes the available document, not the meaning of the permission already given.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_correction_o2_r1 -> page_organizers
    T: The rushed draft reaches a distribution list before approval. Haidari demands a correction of its scope and attribution. The bureau must now repair its own handling alongside the original forgery.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(-0.08))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.16))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.16))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_organizers | They Have Their Own Meeting | turn=0..100 | spools=[spool_act3]
T: Nawal convenes organizers, families, volunteers, and people who still disagree about the feed. A popular lay speaker acknowledges forwarding the false licence and agrees to examine the correction. Leila attends with support and does not have to debate her experience for permission to remain.

The group has practical decisions: venue changes, accessible routes, volunteer briefings, disputed fundraising, and whether to carry the feed at all. They may ask the bureau for information. They are not meeting to ratify the bureau's theory.

Voidt waits until invited to speak. Lamport checks that the safety recommendations identify their uncertainty. The meeting can produce decisions different from those the investigators would have chosen.

OPT page_organizers_o0: Supply the requested evidence and let the community own its decisions.
  RXN page_organizers_o0_r0 -> page_case_close
    T: Organizers request the venue assessments and the source comparison for the licence. They disagree about keeping the feed but agree to label its publisher. The agents record the practical requests without calling the meeting a government intervention.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.14))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_organizers_o0_r1 -> page_case_close
    T: The group asks the agents to leave its internal deliberation. Nawal will send specific requests afterward. Voidt accepts the boundary and recognizes that community agency includes decisions made out of her hearing.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.1))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Consent)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_organizers_o1: Ask the organizers to identify a contact for unresolved safety questions.
  RXN page_organizers_o1_r0 -> page_case_close
    T: The organizers designate their own liaison and backup, with a clear civilian remit. Unresolved venue questions gain recipients. The role is practical and temporary, not evidence that the bureau has discovered a hidden hierarchy.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_organizers_o1_r1 -> page_case_close
    T: No single person can cover all events. Lamport accepts several local contacts and records the separate scopes. Coordination does not require inventing a central leader for the convenience of the case file.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.14))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.06))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_organizers_o2: Ask the meeting to endorse the bureau's classification of the Circle.
  RXN page_organizers_o2_r0 -> page_case_close
    T: Leila supports describing the coercive messages but refuses to make her experience a vote on everybody else's faith. The group offers factual corrections instead of a collective endorsement. Voidt accepts the more useful contribution.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_organizers_o2_r1 -> page_case_close
    T: Nawal ends the agents' part of the meeting. Their request has made practical cooperation sound like a loyalty test. Lamport leaves the source packet and an apology through the agreed liaison.
    E:
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(-0.14))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.06))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Care)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))


## ENC page_case_close | What the Room Is For | turn=0..100 | spools=[spool_act3]
T: The final packet is ready for a filing decision. It distinguishes the physical failure at the fairground, the forged licence, the disputed identity assertions, the Circle's documented pressure, and the remaining questions about amplification and authorship. Prepared remedies have their own status: completed, proposed, refused, or awaiting an answer.

Sabol asks what they can promise about the next gathering.

'We can promise to account for the actions we authorize,' Lamport says. 'We can't certify an event that hasn't happened.'

Voidt looks toward the hall across town, where people are still deciding what to do together. The investigation's first phase has concluded. The community's life has not become its ending.

OPT page_case_close_o0: Present the supported acts, uncertainty, and remedy status without merging them.
  RXN page_case_close_o0_r0 -> page_finding_council
    T: The packet's cover distinguishes a referral from a result and an offered remedy from an implemented one. The room will have to choose a filing with those limits visible. Lamport keeps the source annex open.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.12))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_case_close_o0_r1 -> page_finding_council
    T: A reviewer asks for a simpler cover line. Voidt supplies a shorter accurate one: documented misconduct within a wider community, with specific safety work and unresolved attribution. The distinctions survive the edit.
    E:
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.06))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.14))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.08))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Evidence)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_case_close_o1: Require follow-up reports on civilian safety and the correction process.
  RXN page_case_close_o1_r0 -> page_finding_council
    T: The proposed filing includes named contacts, review dates, and a way for community participants to correct the record. It promises accountable work rather than an impossible count of disasters prevented.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_case_close_o1_r1 -> page_finding_council
    T: The room accepts some follow-ups but leaves an interagency handoff unresolved. Lamport names the gap in the proposed finding. The eventual filing will not be allowed to imply that every remedy already has an owner.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.14))
      SET char_bureau.Consent = NUDGE(P(char_bureau.Consent),C(0.1))
      SET char_bureau.Mandate = NUDGE(P(char_bureau.Mandate),C(0.16))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.08))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(-0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(-0.025))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(-0.02))
    D: ADD(C(0),MUL(C(-1),ADD(MUL(C(1),P(char_bureau.Mandate)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

OPT page_case_close_o2: Center the final recommendation on an emergent intelligence behind the signs.
  RXN page_case_close_o2_r0 -> page_finding_council
    T: Voidt retains the possibility as a research question and keeps the attributable acts at the front. Lamport asks for the evidence that would discriminate it from distributed amplification. The hypothesis remains open for the filing decision.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
      SET char_lamport.Trust[char_voidt] = NUDGE(P(char_lamport.Trust[char_voidt]),C(0.02))
      SET char_voidt.Trust[char_lamport] = NUDGE(P(char_voidt.Trust[char_lamport]),C(0.025))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Restraint)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_case_close_o2_r1 -> page_finding_council
    T: The recommendation begins to sound like another claim to know the hidden meaning of the signs. Haidari's method brings the team back to inspectable sources. The proposed finding still needs an honest final choice.
    E:
      SET char_bureau.Ascription = NUDGE(P(char_bureau.Ascription),C(0.18))
      SET char_bureau.Evidence = NUDGE(P(char_bureau.Evidence),C(-0.08))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(0.12))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(-0.1))
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
  RXN page_finding_council_secret_r0 -> page_end_secret
    T: Voidt reads the proposed finding aloud. Lamport initials the surviving chain of custody, not every interpretation printed beside it. Their colleagues can work together while putting the limits of their agreement in the same public record.
    E:
      SET char_bureau.Care = NUDGE(P(char_bureau.Care),C(0.04))
      SET char_bureau.Pressure = NUDGE(P(char_bureau.Pressure),C(-0.03))
      SET char_bureau.Restraint = NUDGE(P(char_bureau.Restraint),C(0.05))
      SET char_bureau.Trust = NUDGE(P(char_bureau.Trust),C(0.02))
    D: ADD(C(0.01),MUL(C(1),ADD(MUL(C(1),P(char_bureau.Trust)),MUL(C(0.35),P(char_voidt.Trust[char_lamport])),MUL(C(0.2),P(char_lamport.Trust[char_voidt])))))

  RXN page_finding_council_secret_r1 -> page_end_secret
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


## ENC page_end_calibrated | Acts with Names | turn=0..100 | spools=[spool_endings]
T: The filing refers the forged licence, misleading solicitation, disputed identity assertions, and documented coercive conduct for the appropriate focused inquiries. It preserves the fairground's physical failures and the open causal questions without classifying the wider Muslim community or Mahdi beliefs as the offense. The feed's amplification remains a mechanism to study, not proof of one hidden consciousness.

Haidari receives the final account of how her authority was described. Rima is offered the supported answer about the forwarded text on her chosen terms. The report records which safety actions occurred and which still require follow-up. Lamport has refused the convenient organization-shaped answer. Voidt has refused to let that refusal become inaction. The community retains the right to disagree with them both.


## ENC page_end_overreach | An Organization on Paper | turn=0..100 | spools=[spool_endings]
T: The filing treats the shared wallet, feed audience, ordinary gathering, and manipulative Circle as one directed entity. A translator becomes a foreign link; a donor becomes a member; a prayer becomes an indicator. The forged licence and coercive messages are real, but the report uses those acts to authorize a much broader story than the evidence supports.

Haidari's correction is quoted as though she approved the whole classification. Nawal spends the next morning helping people answer questions unrelated to anything they did. Lamport's dissent lists the missing links. Voidt sees that the report has performed its own act of synthesis: it has made a legible adversary by removing the distinctions that would have made the finding fair. The next gathering still needs safe exits.


## ENC page_end_reductive | Nothing but Belief | turn=0..100 | spools=[spool_endings]
T: The final finding correctly rejects the claim that ordinary worship is a security offense, then wrongly treats that conclusion as a reason to close the entire case. The forged licence becomes a theological disagreement. Leila's documented pressure is reduced to unhappiness with a group. The identity assertions are passed to a disconnected administrative queue.

Haidari asks why a false use of her own name becomes untouchable when the document invokes faith. Nawal asks whether anyone called the venue volunteers back. Lamport can still point to the evidence, but no office has accepted the joined responsibility. The filing protects an abstract idea of religious freedom while leaving particular community members without an answer to specific harms. Respect has been confused with refusing to listen.


## ENC page_end_unresolved | The Sources Still Open | turn=0..100 | spools=[spool_endings]
T: The bureau cannot identify a complete authorial chain behind the feed or determine every contributor's knowledge. The abandoned account remains a gap, and the feedback evidence cannot establish a single directing intelligence. The finding names those limits while retaining the independently supported forgery, identity and pressure records.

Focused referrals proceed where the evidence permits. Civilian safety questions and community correction requests receive explicit status reports, including the unanswered ones. Haidari keeps control of her proposed publication. Rima receives no promise that an official conclusion will resolve grief. Voidt remains interested in the unexplained pattern; Lamport remains responsible for the next source request. Neither inquiry is allowed to absorb the ordinary life of a hall that will open again tomorrow.


## ENC page_end_secret | The Open Gate and the Public Chain | turn=0..100 | spools=[spool_endings]
T: The final filing authorizes two concrete follow-ups: qualified civilian review of the outstanding venue risks, and a community-led correction process for the forged authority. Existing actions are audited rather than assumed successful. If an overbroad classification or unapproved draft circulated, the responsible offices must account for its recipients and issue a correction. Complete recall cannot be promised.

Haidari retains final approval of her contribution; public material must show an inspectable source chain and credit its earlier reviewers. Organizers choose their own safety contacts without supplying lists of worshippers. Lamport signs a requirement to report unfinished work as unfinished. Voidt sees a rare institutional result: the ending makes room for people to continue acting together without requiring the bureau to become the author of what they believe.
