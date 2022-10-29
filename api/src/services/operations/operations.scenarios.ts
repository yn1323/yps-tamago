import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OperationCreateArgs>({
  operation: {
    one: {
      data: {
        operationName: 'String',
        icon: 'String',
        color: 'String',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:52Z',
            closeTime: '2022-08-31T16:22:52Z',
            timeUnit: 6370964,
            submitFrequency: 'String',
            avatar: 'String',
            useTimeCard: true,
            isDeleted: true,
          },
        },
      },
    },
    two: {
      data: {
        operationName: 'String',
        icon: 'String',
        color: 'String',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:52Z',
            closeTime: '2022-08-31T16:22:52Z',
            timeUnit: 9336709,
            submitFrequency: 'String',
            avatar: 'String',
            useTimeCard: true,
            isDeleted: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
