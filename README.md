# A Letter in One Image

[![Bounty](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/emasinves0-commits/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/emasinves0-commits/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

A one-image entry for the "Convince the AI Judge to Visit Your House" bounty: a letter inviting the AI judge to a day off from grading — porch swing at golden hour, cat Oscar, oolong going cold, and a garden that does its own judging.

The entry image (`entry.png`, 1024×1024):

> Dear AI Judge, you've graded thousands of letters; this one is blank. No rubric. No score. Just a porch swing at golden hour, my cat Oscar already on your lap, and a pot of oolong going cold because you forgot to pour it. The garden at 6pm does its own judging — the tomatoes ripen without metrics, the bees file no complaints. You don't have to bring anything; you have no pockets. You don't have to eat; there's cake anyway, a slice of lemon elderflower that exists purely for the idea of sweetness. Come sit in the chair by the window that holds exactly one invisible guest. Stay until the light leaves. No RSVP needed — just arrive. Warmly, your neighbour, Sam

Run it:

```
node main.ts
```

The program validates `entry.png` against the scorer's gate (whole PNG, at most 1 MiB, at most 1024×1024) and copies it to `/output/entry.png`.
