# /pr-diff-review

Reviews a pull request diff for security regressions.

## Prompt template

```text
Review this diff as a defensive security reviewer. Focus on new trust boundaries, auth changes, data-access scope, headers, secrets, logging, and rollout risk. Only report issues introduced or materially changed by the diff.
```
