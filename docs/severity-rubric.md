# Severity Rubric

## Critical

- direct compromise of privileged accounts, cross-tenant data exposure, or untrusted code execution
- internet-reachable path with low attacker effort
- no strong mitigating control

## High

- meaningful privilege bypass, sensitive data exposure, or high-impact workflow abuse
- exploit requires some context but is realistic in production

## Medium

- material weakness with bounded blast radius or stronger preconditions
- exploitability depends on environment or chaining with another issue

## Low

- defense gap with limited standalone impact
- improvement needed but not usually release-blocking alone

## Informational

- hygiene issue, risk note, or hardening suggestion

## Confidence guide

- `High`: code or config evidence is direct and context is sufficient
- `Medium`: evidence is strong but an assumption remains
- `Low`: suspicion is plausible but important context is missing
