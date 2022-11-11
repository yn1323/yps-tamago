import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShopUserBelongingCreateArgs>({
  shopUserBelonging: {
    one: {
      data: {
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:24Z',
            closeTime: '2022-08-31T16:22:24Z',
            timeUnit: 7128381,
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
        isDeleted: true,
        shop: {
          create: {
            shopName: 'String',
            openTime: '2022-08-31T16:22:24Z',
            closeTime: '2022-08-31T16:22:24Z',
            timeUnit: 8694157,
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
