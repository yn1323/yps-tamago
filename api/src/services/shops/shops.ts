import type {
  QueryResolvers,
  MutationResolvers,
  ShopResolvers,
} from 'types/graphql'

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

export const Shop: ShopResolvers = {
  organization: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).organization(),
  user: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).user(),
  operation: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).operation(),
  stableShift: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).stableShift(),
  unstableShift: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).unstableShift(),
  request: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).request(),
  timeCard: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).timeCard(),
  temporaryClosed: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).temporaryClosed(),
  announce: (_obj, { root }) =>
    db.shop.findUnique({ where: { id: root.id } }).announce(),
}
