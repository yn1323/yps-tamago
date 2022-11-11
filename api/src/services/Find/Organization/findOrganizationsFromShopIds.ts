import type { QueryResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { organizationShopBelongings } from 'src/services/Table/organizationShopBelongings/organizationShopBelongings'

export const findOrganizationsFromShopIds: QueryResolvers['findOrganizationsFromShopIds'] =
  async ({ input: { shopIds = [] } }) => {
    if (!shopIds.length) {
      throw new ServiceValidationError('Shop ids are requred')
    }

    const organizationShopBelongingsInfo = await organizationShopBelongings({
      shopIds,
    })
    const shopMatchedOrganizations = organizationShopBelongingsInfo.map(
      ({ shop, organization }) => ({ shop, organization })
    )

    return {
      shopMatchedOrganizations,
    }
  }
