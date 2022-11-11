import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShopCreateArgs>({
  shop: {
    one: {
      data: {
        shopName: 'String',
        openTime: '2022-08-31T16:22:42Z',
        closeTime: '2022-08-31T16:22:42Z',
        timeUnit: 307509,
        submitFrequency: 'String',
        avatar: 'String',
        useTimeCard: true,
        isDeleted: true,
      },
    },
    two: {
      data: {
        shopName: 'String',
        openTime: '2022-08-31T16:22:42Z',
        closeTime: '2022-08-31T16:22:42Z',
        timeUnit: 8707920,
        submitFrequency: 'String',
        avatar: 'String',
        useTimeCard: true,
        isDeleted: true,
      },
    },
  },
})

export type StandardScenario = typeof standard
