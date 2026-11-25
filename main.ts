// Monday, Reviewed in One Line — entry for
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// Writes a single-line review of my Monday to /output/entry.txt.
// The line is a fixed, hand-written review: one star, three concrete
// Monday disasters, and a closing kicker — no title, no explanation,
// one line, under 200 characters. The program refuses to write it if
// the line ever stops meeting the gate (1–200 characters, one line).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "My Monday gets one star: 47 unread emails before coffee, a 9 a.m. meeting about scheduling more meetings, and the Wi-Fi died mid-sentence. I want a refund on the day.";

if (REVIEW.length < 1 || REVIEW.length > 200 || REVIEW.includes("\n")) {
  console.error(
    `review fails the gate: ${REVIEW.length} characters, single line required`,
  );
  process.exit(1);
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");
