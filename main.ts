// One Line, One Laugh: Roast Your Fridge — the program writes a single
// roast line (1-200 chars, one line, UTF-8) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge hums like it's running a marathon, but the only thing it ever beats is the milk's expiry date.";

// The gate requires 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error("roast line fails the 1-200 character single-line gate");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
