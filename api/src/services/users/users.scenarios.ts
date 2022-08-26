import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        userId: 'String6410387',
        name: 'String',
        avatar: 'String',
        role: 'String',
      },
    },
    two: {
      data: {
        userId: 'String4228263',
        name: 'String',
        avatar: 'String',
        role: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
