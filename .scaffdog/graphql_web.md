---
name: 'graphql_web'
root: './web/src/hooks/gql'
output: []
ignore: []
questions:
  gqlType:
    message: 'Which is GraphQL type?'
    choices:
      - 'query'
      - 'mutation'
      - 'subscription'
  gqlName: 'What is Query (or Mutation) name?(DO NOT ADD Query or Mutation at last)'
---

# `{{ inputs.gqlType }}/{{ inputs.gqlName | pascal }}/index.ts`
```tsx
{{ 'web/gql/index.ts' | read }}
```

# `{{ inputs.gqlType }}/{{ inputs.gqlName | pascal }}/indext.test.ts`
```tsx
{{ 'web/gql/index.test.ts' | read }}
```


# `{{ inputs.gqlType }}/{{ inputs.gqlName | pascal }}/indext.mock.ts`
```tsx
{{ 'web/gql/index.mock.ts' | read }}
```
