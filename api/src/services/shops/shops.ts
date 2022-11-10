import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const shops: QueryResolvers['shops'] = () => {
  return db.shop.findMany()
}

export const shop: QueryResolvers['shop'] = ({ id }) => {
  validate(id, 'shop.id', {
    length: {
      between: [32, 36],
      message: 'shop.id has to be 32 ~36',
    },
  })
  return db.shop.findUnique({
    where: { id },
  })
}

export const createShop: MutationResolvers['createShop'] = ({ input }) => {
  return db.shop.create({
    data: input,
  })
}

export const updateShop: MutationResolvers['updateShop'] = ({ id, input }) => {
  return db.shop.update({
    data: input,
    where: { id },
  })
}

export const deleteShop: MutationResolvers['deleteShop'] = ({ id }) => {
  return db.shop.delete({
    where: { id },
  })
}
