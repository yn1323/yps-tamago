import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        userId: 'String825664',
        userName: 'String',
        avatar: 'String',
        role: 'String',
        email: 'String',
        isDeleted: true,
      },
    },
    two: {
      data: {
        userId: 'String2609162',
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
