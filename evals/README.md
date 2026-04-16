# Evals

Each fixture models a small defensive review scenario.

Fields:

- `id`: stable fixture name
- `mode`: intended review mode
- `summary`: what the fixture represents
- `input`: code or config snippet
- `expected_findings`: the findings Patchman should identify

Use these to compare:

- issue detection quality
- severity consistency
- confidence discipline
- remediation quality
- false positive rate
