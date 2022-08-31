import type {
  QueryResolvers,
  MutationResolvers,
  ShopUserBelongingResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shopUserBelongings: QueryResolvers['shopUserBelongings'] = () => {
  return db.shopUserBelonging.findMany()
}

export const shopUserBelonging: QueryResolvers['shopUserBelonging'] = ({
  id,
}) => {
  return db.shopUserBelonging.findUnique({
    where: { id },
  })
}

export const createShopUserBelonging: MutationResolvers['createShopUserBelonging'] =
  ({ input }) => {
    return db.shopUserBelonging.create({
      data: input,
    })
  }

export const updateShopUserBelonging: MutationResolvers['updateShopUserBelonging'] =
  ({ id, input }) => {
    return db.shopUserBelonging.update({
      data: input,
      where: { id },
    })
  }

export const deleteShopUserBelonging: MutationResolvers['deleteShopUserBelonging'] =
  ({ id }) => {
    return db.shopUserBelonging.delete({
      where: { id },
    })
  }

export const ShopUserBelonging: ShopUserBelongingResolvers = {
  shop: (_obj, { root }) =>
    db.shopUserBelonging.findUnique({ where: { id: root.id } }).shop(),
  user: (_obj, { root }) =>
    db.shopUserBelonging.findUnique({ where: { id: root.id } }).user(),
}
