import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        userName: 'String',
        avatar: 'String',
        role: 'String',
        email: 'String',
        isDeleted: true,
      },
    },
    two: {
      data: {
        userName: 'String',
        avatar: 'String',
        role: 'String',
        email: 'String',
        isDeleted: true,
      },
    },
  },
})

export type StandardScenario = typeof standard
