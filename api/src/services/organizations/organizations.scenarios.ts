import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: { data: { organizationName: 'String', isDeleted: true } },
    two: { data: { organizationName: 'String', isDeleted: true } },
  },
})

export type StandardScenario = typeof standard
