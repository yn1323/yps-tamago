import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const shopUserBelongings: QueryResolvers['shopUserBelongings'] = ({
  userId,
  shopId,
}) => {
  validateWith(() => {
    if (!userId && !shopId) {
      throw new Error('User Id or Shop Id is required')
    }
  })
  return db.shopUserBelonging.findMany({
    include: {
      shop: true,
      user: true,
    },
    where: userId ? { userId } : { shopId },
  })
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
