---
name: 'cell'
root: './web/src'
output: []
ignore: []
questions:
  component: 'What is cell name??'
  path: 'What is path??(i.e. features/Timeline)'
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/index.mock.ts`
```tsx
{{ 'web/presentation/cells/CellCell.mock.ts' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/index.stories.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.stories.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/index.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/index.test.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.test.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/script.ts`
```tsx
{{ 'web/presentation/cells/script.ts' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/script.test.ts`
```tsx
{{ 'web/presentation/cells/script.test.ts' | read }}
```
