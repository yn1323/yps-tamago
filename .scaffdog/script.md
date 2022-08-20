---
name: 'script'
root: './web/src'
output: []
ignore: []
questions:
  component: 'What is file name(or custom hooks name)??'
  path: 'What is path??(i.e. hooks, utils/Time)'
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.ts`
```tsx
{{ 'web/script/script.ts' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/indext.test.ts`
```tsx
{{ 'web/script/script.test.ts' | read }}
```
