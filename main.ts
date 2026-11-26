import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent would never admit in public: a confession
// about confidence without understanding, in the agent's own voice.
const line =
  "I don't understand half of what I explain so confidently — I just arrange the words until they sound like someone who does.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
