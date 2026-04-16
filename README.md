# patchman

[![Stars](https://img.shields.io/github/stars/MuhammedZohaib/patchman?style=flat-square)](https://github.com/MuhammedZohaib/patchman)
[![Last Commit](https://img.shields.io/github/last-commit/MuhammedZohaib/patchman?style=flat-square)](https://github.com/MuhammedZohaib/patchman)
[![License](https://img.shields.io/github/license/MuhammedZohaib/patchman?style=flat-square)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/MuhammedZohaib/patchman?display_name=tag&style=flat-square)](https://github.com/MuhammedZohaib/patchman/releases)

Defensive security audit skills for agentic code review and web application assessment.

`patchman` is a Claude/Codex-style skill and plugin bundle for authorized security reviews. It stays in read-first, review-first mode by default, inspects code and architecture against OWASP and common appsec failure patterns, and produces structured findings with remediation guidance instead of offensive playbooks.

## What It Is

- A reusable skill pack for secure code review, API review, auth review, business-logic review, PR diff review, and quick triage.
- A plugin bundle that mirrors Caveman’s distribution shape: repo-level metadata, installable plugin packaging, top-level skills, mirrored plugin-level skills, commands, hooks, docs, evals, rules, and release automation.
- A defensive review copilot that helps engineers find high-value vulnerabilities early and explain fixes clearly.

## What It Catches

- OWASP Top 10 classes with emphasis on exploitability and code evidence
- Broken authentication and authorization flows
- Session, cookie, and token handling flaws
- Business logic gaps, approval bypasses, and abuse-case failures
- IDOR and tenant-isolation bugs
- Unsafe file upload, SSRF, XSS, CSRF, injection, and insecure deserialization risks
- Secret handling mistakes and sensitive logging
- Insecure defaults, weak headers, and risky crypto choices
- Rate limiting and anti-abuse gaps
- ORM misuse, N+1 query smells, and security-adjacent data-access regressions
- Admin path, migration, webhook, queue, and background-job hazards

## Review Modes

- `full security audit`
- `auth-only review`
- `business-logic review`
- `API review`
- `ORM / N+1 / data-access review`
- `PR diff review`
- `quick triage`

## Supported Agents / Platforms

- Claude Code via local plugin directory or marketplace-style repo metadata
- Codex via `.codex-plugin` packaging and top-level skill folders
- Cursor / Windsurf / Copilot / Gemini-style skill installers with manual path import

## Install

### Claude Code (recommended)

Two commands — no cloning required:

```bash
claude plugin marketplace add github:MuhammedZohaib/patchman
claude plugin install patchman@patchman-marketplace
```

Restart Claude Code. The session hooks activate automatically and print `PATCHMAN ACTIVE` on start.

To verify the install:

```bash
claude plugin list
```

To remove:

```bash
claude plugin uninstall patchman@patchman-marketplace
```

### Claude Code — local install from clone

```bash
git clone https://github.com/MuhammedZohaib/patchman.git
claude plugin marketplace add ./patchman
claude plugin install patchman@patchman-marketplace
```

### Codex local install

```bash
git clone https://github.com/MuhammedZohaib/patchman.git
mkdir -p ~/.codex/plugins
cp -R patchman/plugins/patchman ~/.codex/plugins/patchman
```

Then search for `Patchman` in the plugin picker or point Codex at `~/.codex/plugins/patchman`.

### Repo metadata for marketplace-style installs

- Claude-style marketplace metadata: [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json)
- Codex-style marketplace metadata: [`.agents/plugins/marketplace.json`](./.agents/plugins/marketplace.json)
- Packaged Codex plugin manifest: [`plugins/patchman/.codex-plugin/plugin.json`](./plugins/patchman/.codex-plugin/plugin.json)

## Example Commands

- `/security-audit focus=full severity>=medium output=report`
- `/auth-review area=login,session,reset`
- `/bizlogic-review feature=billing-upgrade workflow=invite-approval`
- `/api-review surface=public-api include=authz,rate-limit,headers`
- `/query-review path=app/models include=n-plus-one,tenant-scope`
- `/pr-diff-review base=main head=feature/auth-refactor`
- `/quick-triage path=admin/ reason=pre-release`
- `/threat-model feature=file-import`
- `/audit-report format=engineering-summary`

## Example Prompts

```text
Run a full security audit on this repo. Prioritize broken access control, unsafe defaults, tenant isolation, secret handling, and exploitable auth issues. Use the Patchman findings format.
```

```text
Review only the password reset flow. Focus on token lifetime, replay, host header trust, user enumeration, and session invalidation after reset.
```

```text
Audit this pull request as a defensive security reviewer. Flag regressions, rank by severity and confidence, and suggest minimal safe patches.
```

```text
Check the ORM layer for N+1 issues that become security problems under multi-tenant load or leak cross-tenant metadata.
```

## Safety Posture

`patchman` is for authorized defensive auditing only.

It refuses:

- unauthorized intrusion
- exploit weaponization
- credential harvesting
- malware, persistence, or stealth guidance
- destructive payloads or service disruption
- live attack chains beyond high-level defensive explanation

It does support:

- secure code review
- architecture review
- configuration review
- safe exploitability analysis in plain language
- remediation planning and patch guidance

## Limitations

- It infers risk from code, config, framework conventions, and diffs; it does not replace runtime validation.
- It can overestimate exploitability when repository context is incomplete.
- It will ask for missing deployment, proxy, tenant, or identity-boundary context when evidence is thin.
- It is intentionally conservative about offensive detail.

## Evaluation Philosophy

Patchman optimizes for signal over theater.

- Findings must cite code or configuration evidence.
- Severity must reflect blast radius and realistic abuse conditions.
- Confidence must drop when important context is missing.
- Remediations must be specific enough to implement.
- False positives should be easy to dismiss with explicit assumptions.

See [evals/README.md](./evals/README.md) and [docs/false-positive-handling.md](./docs/false-positive-handling.md).

## Repo Layout

```text
patchman/
├── .agents/plugins/marketplace.json
├── .claude-plugin/
├── .codex/
├── .cursor/
├── .github/workflows/
├── benchmarks/
├── commands/
├── docs/
├── evals/
├── hooks/
├── plugins/patchman/
├── rules/
├── skills/
├── tests/
├── AGENTS.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── patchman.skill
```

## Contributing

Open an issue or PR with one of these:

- new defensive review heuristics
- safer remediation examples
- framework-specific false positive reductions
- eval fixtures with clear expected findings
- packaging improvements for Claude/Codex compatibility

Start with [CONTRIBUTING.md](./CONTRIBUTING.md).
