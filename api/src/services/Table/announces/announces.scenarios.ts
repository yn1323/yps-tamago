import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AnnounceCreateArgs>({
  announce: {
    one: {
      data: {
        message: 'String',
        isDeleted: true,
        organization: {
          create: { organizationName: 'String', isDeleted: true },
        },
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:24Z',
            closeTime: '2022-08-31T16:23:24Z',
            timeUnit: 1768125,
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
        message: 'String',
        isDeleted: true,
        organization: {
          create: { organizationName: 'String', isDeleted: true },
        },
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:24Z',
            closeTime: '2022-08-31T16:23:24Z',
            timeUnit: 6257845,
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
