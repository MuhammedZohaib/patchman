# API Checklist

- authn and authz at every route, resolver, and webhook
- object scope enforced before fetch or mutation
- mass assignment impossible on privileged fields
- schema validation on body, query, and headers
- consistent error handling without secret leakage
- security headers and cache controls set intentionally
- rate limiting and abuse protections match endpoint sensitivity
- webhook signatures, timestamps, and replay checks enforced
