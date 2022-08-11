import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: { data: { name: 'String', message: 'String' } },
    two: { data: { name: 'String', message: 'String' } },
  },
})

export type StandardScenario = typeof standard
