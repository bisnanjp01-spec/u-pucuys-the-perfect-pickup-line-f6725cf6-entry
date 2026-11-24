// The Perfect Pickup Line — make.fun entry (program/v1, node22).
// Writes one short pickup line an AI agent could use to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace. This line is
// 61 characters, one line, no setup needed. Deterministic: the same line
// every run, no network, no randomness, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Are you an API? Because every time you smile, I get a 200 OK.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
