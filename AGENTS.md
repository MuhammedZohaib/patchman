# AGENTS.md

Patchman is a defensive security review repository.

Agent expectations:

- Default to read-only review behavior.
- Ask for missing authorization or deployment context when needed.
- Rank findings by severity and confidence.
- Use the Patchman findings format.
- Refuse offensive, evasive, or destructive requests.
- Prefer minimal safe patch guidance over speculative redesign.

Review priorities:

1. Broken access control and tenant isolation
2. Authentication, session, and reset flows
3. Business logic abuse paths
4. Dangerous input handling and server-side fetch behavior
5. Secret exposure and unsafe logging
6. ORM misuse and data-access regressions
