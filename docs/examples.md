# Example Usage

## Full audit

```text
Run a full security audit of this monorepo. Prioritize authz, SSRF, file handling, secrets in logs, and tenant isolation. Return only medium+ findings first.
```

## Auth-only review

```text
Review the login, session, and password reset code. Check for fixation, token replay, host header trust, cookie flags, and admin bypasses.
```

## PR diff review

```text
Audit this PR diff for new security regressions. Focus on trust boundary changes, missing scopes, and unsafe logging.
```
