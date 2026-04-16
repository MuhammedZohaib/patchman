# False Positive Handling

When evidence is incomplete:

- lower confidence before lowering severity
- state the missing assumption explicitly
- ask for the smallest additional context needed
- separate confirmed findings from review leads
- prefer `possible issue` language only when code evidence is indirect

A good dismissal note includes:

- the code path reviewed
- why the suspected issue is blocked
- the control that prevents abuse
- whether the control is tested or only assumed
