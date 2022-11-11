import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StableShiftCreateArgs>({
  stableShift: {
    one: {
      data: {
        workFrom: '2022-08-31T16:22:59Z',
        workTo: '2022-08-31T16:22:59Z',
        breakFrom: '2022-08-31T16:22:59Z',
        breakTo: '2022-08-31T16:22:59Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:59Z',
            closeTime: '2022-08-31T16:22:59Z',
            timeUnit: 4598906,
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
        workFrom: '2022-08-31T16:22:59Z',
        workTo: '2022-08-31T16:22:59Z',
        breakFrom: '2022-08-31T16:22:59Z',
        breakTo: '2022-08-31T16:22:59Z',
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:59Z',
            closeTime: '2022-08-31T16:22:59Z',
            timeUnit: 5543040,
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
