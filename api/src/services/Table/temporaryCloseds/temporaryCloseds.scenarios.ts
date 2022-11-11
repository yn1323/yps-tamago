import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TemporaryClosedCreateArgs>({
  temporaryClosed: {
    one: {
      data: {
        date: '2022-08-31T16:23:19Z',
        isDeleted: true,
        organization: {
          create: { organizationName: 'String', isDeleted: true },
        },
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:19Z',
            closeTime: '2022-08-31T16:23:19Z',
            timeUnit: 6464949,
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
        date: '2022-08-31T16:23:19Z',
        isDeleted: true,
        organization: {
          create: { organizationName: 'String', isDeleted: true },
        },
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:23:19Z',
            closeTime: '2022-08-31T16:23:19Z',
            timeUnit: 956123,
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
