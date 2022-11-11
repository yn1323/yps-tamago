import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const organizationShopBelongings: QueryResolvers['organizationShopBelongings'] =
  ({ shopIds }) => {
    if (!shopIds) {
      throw new ServiceValidationError('Shop Ids are required')
    }
    return db.organizationShopBelonging.findMany({
      include: {
        shop: true,
        organization: true,
      },
      where: {
        OR: shopIds.map(shopId => ({ shopId })),
      },
    })
  }

export const organizationShopBelonging: QueryResolvers['organizationShopBelonging'] =
  ({ id }) => {
    return db.organizationShopBelonging.findUnique({
      where: { id },
    })
  }

export const createOrganizationShopBelonging: MutationResolvers['createOrganizationShopBelonging'] =
  ({ input }) => {
    return db.organizationShopBelonging.create({
      data: input,
    })
  }

export const updateOrganizationShopBelonging: MutationResolvers['updateOrganizationShopBelonging'] =
  ({ id, input }) => {
    return db.organizationShopBelonging.update({
      data: input,
      where: { id },
    })
  }

export const deleteOrganizationShopBelonging: MutationResolvers['deleteOrganizationShopBelonging'] =
  ({ id }) => {
    return db.organizationShopBelonging.delete({
      where: { id },
    })
  }
