import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { userId: 'String3921936', name: 'String', avatar: 'String' },
    },
    two: {
      data: { userId: 'String2984143', name: 'String', avatar: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
