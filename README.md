# patchman

[![Stars](https://img.shields.io/github/stars/MuhammedZohaib/patchman?style=flat-square)](https://github.com/MuhammedZohaib/patchman)
[![Release](https://img.shields.io/github/v/release/MuhammedZohaib/patchman?display_name=tag&style=flat-square)](https://github.com/MuhammedZohaib/patchman/releases)
[![License](https://img.shields.io/github/license/MuhammedZohaib/patchman?style=flat-square)](./LICENSE)

Defensive security audit skill pack for agentic code review and web application assessment.

---

## Overview

Patchman is a skill and plugin bundle for **authorized security reviews**. It operates in read-first, review-first mode — inspecting code and architecture against OWASP and common appsec failure patterns, then producing structured findings with actionable remediation guidance.

**Supported agents:** Claude Code · Codex · Cursor · Windsurf · Copilot · Gemini-style skill installers

---

## Installation

### Claude Code (Recommended)

```bash
claude plugin marketplace add github:MuhammedZohaib/patchman
claude plugin install patchman@patchman-marketplace
```

Restart Claude Code. The session hooks activate automatically.

**Verify installation**
```bash
claude plugin list
```

**Uninstall**
```bash
claude plugin uninstall patchman@patchman-marketplace
```

---

### Claude Code — Local Install

```bash
git clone https://github.com/MuhammedZohaib/patchman.git
claude plugin marketplace add ./patchman
claude plugin install patchman@patchman-marketplace
```

---

### Codex — Local Install

```bash
git clone https://github.com/MuhammedZohaib/patchman.git
mkdir -p ~/.codex/plugins
cp -R patchman/plugins/patchman ~/.codex/plugins/patchman
```

Open the Codex plugin picker and search for `Patchman`, or point it directly at `~/.codex/plugins/patchman`.

---

## Review Modes

| Mode | Command |
|---|---|
| Full security audit | `/security-audit focus=full severity>=medium output=report` |
| Auth review | `/auth-review area=login,session,reset` |
| Business logic review | `/bizlogic-review feature=billing-upgrade workflow=invite-approval` |
| API review | `/api-review surface=public-api include=authz,rate-limit,headers` |
| ORM / data-access review | `/query-review path=app/models include=n-plus-one,tenant-scope` |
| PR diff review | `/pr-diff-review base=main head=feature/auth-refactor` |
| Quick triage | `/quick-triage path=admin/ reason=pre-release` |
| Threat modeling | `/threat-model feature=file-import` |
| Audit report | `/audit-report format=engineering-summary` |

---

## What Patchman Detects

- OWASP Top 10 classes with code-level evidence
- Broken authentication, authorization, and session management
- IDOR and tenant isolation failures
- Business logic gaps and approval bypasses
- SSRF, XSS, CSRF, injection, and insecure deserialization
- Secret leakage and sensitive data in logs
- Unsafe file upload handling
- Weak headers, insecure defaults, and risky cryptography
- Missing rate limiting and anti-abuse controls
- ORM misuse, N+1 query issues, and cross-tenant data access
- Admin path, webhook, queue, and background job vulnerabilities

---

## Example Prompts

**Full audit**
```
Run a full security audit on this repo. Prioritize broken access control, unsafe defaults,
tenant isolation, secret handling, and exploitable auth issues. Use the Patchman findings format.
```

**Targeted review**
```
Review only the password reset flow. Focus on token lifetime, replay attacks, host header
trust, user enumeration, and session invalidation after reset.
```

**PR review**
```
Audit this pull request as a defensive security reviewer. Flag regressions, rank by severity
and confidence, and suggest minimal safe patches.
```

---

## Findings Format

Every finding includes:

- **Evidence** — specific code or configuration reference
- **Severity** — based on blast radius and realistic abuse conditions
- **Confidence** — drops when context is incomplete
- **Remediation** — specific enough to implement directly

---

## Scope and Limitations

Patchman is for **authorized defensive auditing only**.

**In scope:** secure code review, architecture review, configuration review, exploitability analysis in plain language, remediation planning

**Out of scope:** unauthorized intrusion, exploit weaponization, credential harvesting, malware or persistence guidance, destructive payloads, live attack chains

Patchman infers risk from static code and configuration. It does not replace runtime validation and will request missing deployment, proxy, or identity-boundary context when evidence is insufficient.

---

## Repository Structure

```
patchman/
├── .claude-plugin/
├── .agents/plugins/
├── commands/
├── docs/
├── evals/
├── hooks/
├── plugins/patchman/
├── rules/
├── skills/
└── patchman.skill
```

---

## Contributing

Contributions welcome. Open a PR with any of the following:

- New defensive review heuristics
- Framework-specific false positive reductions
- Safer remediation examples
- Eval fixtures with expected findings
- Packaging improvements for Claude or Codex

See [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

---

## License

See [LICENSE](./LICENSE).
