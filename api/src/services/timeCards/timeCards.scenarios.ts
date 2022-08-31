import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TimeCardCreateArgs>({
  timeCard: {
    one: {
      data: {
        workFrom: '2022-08-31T16:23:14Z',
        workTo: '2022-08-31T16:23:14Z',
        breakFrom: '2022-08-31T16:23:14Z',
        breakTo: '2022-08-31T16:23:14Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:14Z',
            closeTime: '2022-08-31T16:23:14Z',
            timeUnit: 925716,
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
        workFrom: '2022-08-31T16:23:14Z',
        workTo: '2022-08-31T16:23:14Z',
        breakFrom: '2022-08-31T16:23:14Z',
        breakTo: '2022-08-31T16:23:14Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:14Z',
            closeTime: '2022-08-31T16:23:14Z',
            timeUnit: 1800994,
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
