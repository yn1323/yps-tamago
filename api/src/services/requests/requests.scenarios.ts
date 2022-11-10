import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RequestCreateArgs>({
  request: {
    one: {
      data: {
        dateFrom: '2022-08-31T16:23:09Z',
        dateTo: '2022-08-31T16:23:09Z',
        done: true,
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:09Z',
            closeTime: '2022-08-31T16:23:09Z',
            timeUnit: 6343127,
            submitFrequency: 'String',
            avatar: 'String',
            useTimeCard: true,
            isDeleted: true,
          },
        },
        user: {
          create: {
            userName: 'String',
            avatar: 'String',
            role: 'String',
            email: 'String',
            isDeleted: true,
          },
        },
      },
    },
    two: {
      data: {
        dateFrom: '2022-08-31T16:23:09Z',
        dateTo: '2022-08-31T16:23:09Z',
        done: true,
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:09Z',
            closeTime: '2022-08-31T16:23:09Z',
            timeUnit: 807520,
            submitFrequency: 'String',
            avatar: 'String',
            useTimeCard: true,
            isDeleted: true,
          },
        },
        user: {
          create: {
            userName: 'String',
            avatar: 'String',
            role: 'String',
            email: 'String',
            isDeleted: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
