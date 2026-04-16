# Changelog

All notable changes to this project will be documented in this file.

The format follows Keep a Changelog and the project uses Semantic Versioning.

## [0.1.1] - 2026-04-16

### Fixed

- `marketplace.json` plugin source changed from `./plugins/patchman` to `./` so the full repo (including hooks) is installed when using `claude plugin install`
- README install instructions updated to use the correct `claude plugin marketplace add` / `claude plugin install` CLI commands

## [0.1.0] - 2026-04-16

### Added

- Initial `patchman` repository scaffold
- Claude-style and Codex-style plugin manifests
- Seven review-mode skills and mirrored plugin-level skill copies
- Safe session hooks for context priming and mode tracking
- Commands, docs, rules, eval fixtures, benchmarks, and smoke tests
- Release and CI workflow drafts
