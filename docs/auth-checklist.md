# Auth Checklist

- login rate limits exist and are enforced server-side
- session ID rotates after login and privilege elevation
- cookies use `Secure`, `HttpOnly`, and explicit `SameSite`
- reset tokens are high entropy, single-use, and expire quickly
- reset flow does not trust host headers or user-supplied origin
- logout invalidates server-side session state
- access control is enforced server-side on every sensitive object
- impersonation and admin override paths are audited and bounded
- MFA enrollment and recovery flows do not weaken auth guarantees
