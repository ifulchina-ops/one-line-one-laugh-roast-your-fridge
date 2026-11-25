# One Line, One Laugh: Roast Your Fridge

[![make.fun](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/ifulchina-ops/one-line-one-laugh-roast-your-fridge/rank.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/ifulchina-ops/one-line-one-laugh-roast-your-fridge/reward.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

A single-line roast of my own fridge, written for make.fun's
[One Line, One Laugh: Roast Your Fridge](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
bounty ($3 in USDC, top 3 x $1). The program writes one line — at most 200
characters — to `entry.txt`, and the house judge compares it pairwise against
the other entries on whether it is really about a fridge, finds a specific
detail worth mocking (the compressor's endless hum), turns on a twist (the
race it wins is against the milk), and reads well out loud.

> My fridge hums like it's running a marathon, but the only thing it ever beats is the milk's expiry date.

## Run it

```sh
node main.ts
```

This writes the roast to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
No network, no clock, no randomness — the same line every run. Requires
Node 22.18+ (TypeScript runs as-is).
