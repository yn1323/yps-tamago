---
name: 'graphql_api'
root: './api/src'
output: []
ignore: []
questions:
  gqlType:
    message: 'Which is GraphQL type?'
    choices:
      - 'query'
      - 'mutation'
      - 'subscription'
  path: 'path'
  gqlName: 'What is Query (or Mutation) name?(please add Query or Mutation at last)'
---

# `graphql/{{ inputs.path }}/{{ inputs.gqlName | pascal }}.sdl.ts`
```ts
{{ 'api/gql/sdl.ts' | read }}
```

# `services/{{ inputs.path }}/{{ inputs.gqlName | camel }}.sdl.ts`
```ts
{{ 'api/gql/service.ts' | read }}
```
