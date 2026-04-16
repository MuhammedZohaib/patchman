#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), ".patchman-review-mode.json");
if (!fs.existsSync(file)) {
  process.stdout.write("PATCHMAN MODE PERSIST skipped; no mode file yet.\n");
  process.exit(0);
}

const current = JSON.parse(fs.readFileSync(file, "utf8"));
process.stdout.write(`PATCHMAN MODE PERSISTED ${current.mode}\n`);
