# /security-audit

Runs a full defensive review of a codebase, service, or focused path.

## Use when

- you need a broad security readout
- you want prioritized findings with remediation advice
- you need a release-blocker view before deployment

## Suggested arguments

- `focus=full|web|service|admin|worker`
- `paths=app/,api/,jobs/`
- `severity>=medium`
- `output=report|checklist|summary`

## Prompt template

```text
Run a full security audit on {paths}. Cover OWASP Top 10, authz, sessions, SSRF, XSS, CSRF, injection, tenant isolation, secret handling, logging, file upload, background jobs, webhooks, admin paths, and dangerous defaults. Use the Patchman findings format.
```
