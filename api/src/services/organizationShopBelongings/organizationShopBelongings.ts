import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationShopBelongingResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizationShopBelongings: QueryResolvers['organizationShopBelongings'] =
  () => {
    return db.organizationShopBelonging.findMany()
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

export const OrganizationShopBelonging: OrganizationShopBelongingResolvers = {
  shop: (_obj, { root }) =>
    db.organizationShopBelonging.findUnique({ where: { id: root.id } }).shop(),
  organization: (_obj, { root }) =>
    db.organizationShopBelonging
      .findUnique({ where: { id: root.id } })
      .organization(),
}
