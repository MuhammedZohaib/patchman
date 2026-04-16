#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const cwd = process.cwd();
const probes = [
  ["package.json", "node"],
  ["pnpm-lock.yaml", "pnpm"],
  ["Gemfile", "ruby"],
  ["requirements.txt", "python"],
  ["pyproject.toml", "python"],
  ["go.mod", "go"],
  ["Cargo.toml", "rust"],
  ["pom.xml", "java"],
  ["composer.json", "php"],
];

const detected = probes
  .filter(([file]) => fs.existsSync(path.join(cwd, file)))
  .map(([, label]) => label);
const frameworks = [];
if (
  fs.existsSync(path.join(cwd, "next.config.js")) ||
  fs.existsSync(path.join(cwd, "next.config.mjs"))
)
  frameworks.push("nextjs");
if (fs.existsSync(path.join(cwd, "nest-cli.json"))) frameworks.push("nestjs");
if (fs.existsSync(path.join(cwd, "config/routes.rb"))) frameworks.push("rails");
if (fs.existsSync(path.join(cwd, "manage.py"))) frameworks.push("django");

const summary = {
  languages: [...new Set(detected)],
  frameworks: [...new Set(frameworks)],
};

process.stdout.write(`PATCHMAN FRAMEWORK SIGNALS ${JSON.stringify(summary)}\n`);
