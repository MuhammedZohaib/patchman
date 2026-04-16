#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), ".patchman-review-mode.json");
if (!fs.existsSync(file)) {
  process.stdout.write("PATCHMAN MODE PERSIST skipped; no mode file yet.\n");
  process.exit(0);
}

const VALID_MODES = new Set([
  "security-audit",
  "auth-review",
  "business-logic-review",
  "api-review",
  "query-review",
  "pr-diff-review",
  "quick-triage",
]);

const current = JSON.parse(fs.readFileSync(file, "utf8"));
const mode = VALID_MODES.has(current.mode) ? current.mode : "security-audit";
process.stdout.write(`PATCHMAN MODE PERSISTED ${mode}\n`);
