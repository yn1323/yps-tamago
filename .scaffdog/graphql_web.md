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
      - 'description'
  file: 'What is file name??(PascalCase)'
  gqlName: 'What is Query (or Mutation) name?(please add Query or Mutation at last)'
---

# `{{ inputs.gqlType }}/{{ inputs.file | pascal }}/index.ts`
```tsx
{{ 'web/gql/index.ts' | read }}
```

# `{{ inputs.gqlType }}/{{ inputs.file | pascal }}/indext.test.ts`
```tsx
{{ 'web/gql/index.test.ts' | read }}
```
