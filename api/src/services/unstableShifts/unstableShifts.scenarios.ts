import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UnstableShiftCreateArgs>({
  unstableShift: {
    one: {
      data: {
        workFrom: '2022-08-31T16:23:04Z',
        workTo: '2022-08-31T16:23:04Z',
        breakFrom: '2022-08-31T16:23:04Z',
        breakTo: '2022-08-31T16:23:04Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:04Z',
            closeTime: '2022-08-31T16:23:04Z',
            timeUnit: 5519306,
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
        workFrom: '2022-08-31T16:23:04Z',
        workTo: '2022-08-31T16:23:04Z',
        breakFrom: '2022-08-31T16:23:04Z',
        breakTo: '2022-08-31T16:23:04Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:04Z',
            closeTime: '2022-08-31T16:23:04Z',
            timeUnit: 4158970,
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
