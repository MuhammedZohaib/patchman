# Contributing

## Scope

Patchman accepts contributions that improve authorized defensive review quality.

Good contributions:

- better findings heuristics
- tighter framework-specific checklists
- safer remediation examples
- more realistic evaluation fixtures
- packaging and installability improvements
- false positive reductions

Out of scope:

- exploit payload packs
- persistence or evasion guidance
- credential theft workflows
- destructive automation
- unauthorized targeting instructions

## Development flow

1. Open an issue describing the gap, the target framework, and the expected review behavior.
2. Add or update the relevant skill, command, doc, rule, or eval fixture.
3. Update the mirrored plugin-level skill if you change a top-level skill.
4. Run the local smoke tests in `tests/`.
5. Include before/after evidence for any heuristic change.

## Content standards

- Findings must be evidence-based.
- Recommendations must be actionable.
- Severity must be justified by impact and reach.
- Confidence must reflect missing context honestly.
- Examples must stay defensive and non-weaponized.

## Pull request checklist

- [ ] Authorized defensive scope preserved
- [ ] README or docs updated when behavior changes
- [ ] Eval fixture added or updated
- [ ] Mirrored plugin skill updated if needed
- [ ] No offensive or destructive guidance introduced
