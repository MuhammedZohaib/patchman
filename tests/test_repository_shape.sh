#!/usr/bin/env bash
set -euo pipefail

required=(
  ".agents/plugins/marketplace.json"
  ".claude-plugin/plugin.json"
  ".claude-plugin/marketplace.json"
  ".codex/config.toml"
  ".codex/hooks.json"
  "commands/security-audit.md"
  "docs/severity-rubric.md"
  "evals/cases/idor.yaml"
  "hooks/session-prime.js"
  "plugins/patchman/.codex-plugin/plugin.json"
  "skills/security-audit/SKILL.md"
  "README.md"
  "patchman.skill"
)

for file in "${required[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing: $file"
    exit 1
  }
done

echo "repository shape ok"
