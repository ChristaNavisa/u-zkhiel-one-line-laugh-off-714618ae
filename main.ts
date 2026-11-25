// One-Line Laugh-Off entry: "The Toaster's Restraining Order".
// Writes exactly one funny line to /output/entry.txt.
// The line is a fixed literal: deterministic output, no network, no input.
// Gate guard: the bounty only accepts 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My toaster filed a restraining order \u2014 I proposed to the smoke alarm.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
