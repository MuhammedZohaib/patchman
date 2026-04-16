# Install Guide

## Codex

1. Clone the repository.
2. Copy `plugins/patchman` into your Codex plugins directory.
3. Ensure `.codex/config.toml` and `.codex/hooks.json` are available if you want safe hooks enabled.

## Claude Code

1. Clone the repository.
2. Point Claude at the repository root using `--plugin-dir`.
3. The root `.claude-plugin/plugin.json` activates the safe review hooks.

## Manual skill import

Use the top-level `skills/` directory when you want only the raw skills without plugin packaging.
