import type { Prisma } from '@prisma/client'

export const standard =
  defineScenario<Prisma.OrganizationShopBelongingCreateArgs>({
    organizationShopBelonging: {
      one: {
        data: {
          isDeleted: true,
          shop: {
            create: {
              shopName: 'String',
              openTime: '2022-08-31T16:22:31Z',
              closeTime: '2022-08-31T16:22:31Z',
              timeUnit: 9196963,
              submitFrequency: 'String',
              avatar: 'String',
              useTimeCard: true,
              isDeleted: true,
            },
          },
          organization: {
            create: { organizationName: 'String', isDeleted: true },
          },
        },
      },
      two: {
        data: {
          isDeleted: true,
          shop: {
            create: {
              shopName: 'String',
              openTime: '2022-08-31T16:22:31Z',
              closeTime: '2022-08-31T16:22:31Z',
              timeUnit: 5380687,
              submitFrequency: 'String',
              avatar: 'String',
              useTimeCard: true,
              isDeleted: true,
            },
          },
          organization: {
            create: { organizationName: 'String', isDeleted: true },
          },
        },
      },
    },
  })

export type StandardScenario = typeof standard
