# Business Logic Review Checklist

- identify money, quota, approval, and entitlement boundaries
- map state transitions and forbidden transitions
- check replay, duplicate submission, and race conditions
- verify server-side invariants, not UI-only checks
- inspect invite, share, transfer, refund, and upgrade flows
- review feature gating and plan enforcement paths
- check audit trails on high-impact actions
- test failure modes in background jobs and retries
