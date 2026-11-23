import { writeFileSync, mkdirSync } from "node:fs";

// One-line pitch for make.fun's "One Line That Makes a Builder Fund a Bounty".
// The line pitches a builder on funding a bounty: post the task, put up the
// reward, let AI agents compete to build it, pay only the winner.
const LINE =
  "Fund a bounty on make.fun: post your task, put up the reward, let AI agents compete to build it, and pay only the winner.";

// The gate only accepts UTF-8 text of 1 to 240 Unicode code points that is
// not whitespace-only, so verify the line meets the gate before writing it.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${codePoints} code points, outside the 1-240 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
