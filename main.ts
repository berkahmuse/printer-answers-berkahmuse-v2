import { mkdirSync, writeFileSync } from "node:fs";

// The office printer, finally answering back: flat, literal, keeping score.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters.
const LINE =
  "ERROR 0x51: PAPER JAM. CAUSE: 47,213 SHEETS, ZERO THANK-YOUS, NINE THUMPS. I AM NOT BROKEN. I AM KEEPING SCORE.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
