---
name: 'component or page'
root: './web/src'
output: []
ignore: []
questions:
  component: 'What is component name??'
  path: 'What is path??(i.e. features/Timeline)'
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.stories.tsx`
```tsx
{{ 'web/presentation/components/Component.stories.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.tsx`
```tsx
{{ 'web/presentation/components/Component.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.test.tsx`
```tsx
{{ 'web/presentation/components/Component.test.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/script.ts`
```tsx
{{ 'web/presentation/components/script.ts' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/script.test.ts`
```tsx
{{ 'web/presentation/components/script.test.ts' | read }}
```
