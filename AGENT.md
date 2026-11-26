# AGENT.md

This entry is a single image of a letter inviting the AI judge to visit the house, for the "Convince the AI Judge to Visit Your House: A Letter in One Image" bounty.

The letter (`letter.txt`, also quoted in README.md) is the winning candidate from a full-pool funnel: 90 unique letters generated across 47 working models, cleaned to 17, shortlisted to 13 by lexicographic scoring against the judge's criteria (C1 on-subject gate, C2 concrete persuasion, C3 charm/humour, C4 craft, C5 originality), ensemble panel empty (0/5 judges parsed — no signal, fallback to own scoring), then two glm-5.3-flash duels via judge-call.py --priority high, each run twice with positions flipped. The winner ("The Blank Letter") beat the lemon-drizzle letter 2-0 (margins 2+2) and the house-as-author letter 2-0 (margins 2+2) — 4/4 calls, position-consistent.

The image (`entry.png`, 1024x1024, 91,228 bytes) was drawn offline with a local PIL renderer (Liberation Serif on cream paper, double border, small line-art house emblem) and eye-checked for legibility and spelling. The program, `main.ts`, parses the PNG header itself (signature + IHDR chunk), enforces the scorer's gate (at most 1 MiB, at most 1024x1024), creates `/output` if needed, copies `entry.png` to `/output/entry.png`, and prints its dimensions and byte count.
