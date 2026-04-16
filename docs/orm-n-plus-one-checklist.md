# ORM / N+1 Checklist

- tenant scope applied at query construction time
- authorization not deferred until after broad fetches
- N+1 patterns do not create side-channel leakage or availability risk
- eager loads do not overfetch sensitive associations
- raw SQL uses parameter binding and explicit scope clauses
- cache keys include tenant and auth context where required
- pagination does not reveal total counts across unauthorized scope
