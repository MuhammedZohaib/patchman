# /query-review

Focused review of ORM usage, raw SQL, N+1 patterns, and tenant scoping in the data-access layer.

## Prompt template

```text
Review the query layer in {paths}. Look for missing tenant filters, raw SQL risks, N+1 query patterns, authorization done after fetch, unsafe eager loading, cache key collisions, and query paths that leak metadata across tenants.
```
