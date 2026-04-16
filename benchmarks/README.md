# Benchmarks

Patchman benchmarks measure whether the skill produces:

- correct issue prioritization
- concise but evidence-based findings
- safe exploitability language
- remediation guidance that maps cleanly to the code under review

## Suggested benchmark slices

- Full repo audit on a medium-size web application
- PR diff review on auth and tenant code
- API review with rate-limit and header checks
- ORM review with N+1 and scope-regression detection

See `scenarios/` for seed prompts.
