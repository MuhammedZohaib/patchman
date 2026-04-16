#!/usr/bin/env bash
set -euo pipefail

python3 -m json.tool .agents/plugins/marketplace.json >/dev/null
python3 -m json.tool .claude-plugin/marketplace.json >/dev/null
python3 -m json.tool .claude-plugin/plugin.json >/dev/null
python3 -m json.tool plugins/patchman/.codex-plugin/plugin.json >/dev/null
python3 -m json.tool .codex/hooks.json >/dev/null

grep -q 'authorized defensive' README.md
grep -q 'Refused' docs/safety-boundaries.md

echo "manifest smoke ok"
