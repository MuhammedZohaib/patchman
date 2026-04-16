#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const raw = process.env.USER_PROMPT || process.argv.slice(2).join(" ") || "";
const text = raw.toLowerCase();

const modes = [
  ["auth-review", ["auth", "session", "password reset", "jwt", "oauth"]],
  [
    "business-logic-review",
    ["business logic", "workflow", "abuse", "approval", "billing"],
  ],
  ["api-review", ["api", "rest", "graphql", "webhook"]],
  ["query-review", ["orm", "query", "sql", "n+1", "prisma", "sequelize"]],
  ["pr-diff-review", ["pull request", "pr diff", "diff"]],
  ["quick-triage", ["triage", "quick review", "fast pass"]],
];

let selected = "security-audit";
for (const [mode, hints] of modes) {
  if (hints.some((hint) => text.includes(hint))) {
    selected = mode;
    break;
  }
}

const file = path.join(process.cwd(), ".patchman-review-mode.json");
fs.writeFileSync(file, JSON.stringify({ mode: selected }, null, 2));
process.stdout.write(`PATCHMAN REVIEW MODE ${selected}\n`);
