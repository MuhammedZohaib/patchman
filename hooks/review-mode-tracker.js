#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const raw = process.env.USER_PROMPT || process.argv.slice(2).join(" ") || "";
const text = raw.toLowerCase();

const MODES = [
  ["auth-review", ["auth", "session", "password reset", "jwt", "oauth"]],
  ["business-logic-review", ["business logic", "workflow", "abuse", "approval", "billing"]],
  ["api-review", ["api", "rest", "graphql", "webhook"]],
  ["query-review", ["orm", "query", "sql", "n+1", "prisma", "sequelize"]],
  ["pr-diff-review", ["pull request", "pr diff", "diff"]],
  ["quick-triage", ["triage", "quick review", "fast pass"]],
];

// Score all modes; pick highest. Tie or zero → security-audit.
const scores = MODES.map(([mode, hints]) => [
  mode,
  hints.filter((h) => text.includes(h)).length,
]);
const best = scores.reduce((a, b) => (b[1] > a[1] ? b : a));
const selected = best[1] > 0 ? best[0] : "security-audit";

const file = path.join(process.cwd(), ".patchman-review-mode.json");
fs.writeFileSync(file, JSON.stringify({ mode: selected }, null, 2));

// Emit both signals in one atomic operation (no separate persist hook needed).
process.stdout.write(`PATCHMAN REVIEW MODE ${selected}\n`);
process.stdout.write(`PATCHMAN MODE PERSISTED ${selected}\n`);
