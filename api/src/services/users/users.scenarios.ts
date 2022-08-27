import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        userId: 'String2331074',
        name: 'String',
        avatar: 'String',
        role: 'String',
        email: 'String',
      },
    },
    two: {
      data: {
        userId: 'String5025421',
        name: 'String',
        avatar: 'String',
        role: 'String',
        email: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
