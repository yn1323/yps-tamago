import type {
  QueryResolvers,
  MutationResolvers,
  TimeCardResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const timeCards: QueryResolvers['timeCards'] = () => {
  return db.timeCard.findMany()
}

export const timeCard: QueryResolvers['timeCard'] = ({ id }) => {
  return db.timeCard.findUnique({
    where: { id },
  })
}

export const createTimeCard: MutationResolvers['createTimeCard'] = ({
  input,
}) => {
  return db.timeCard.create({
    data: input,
  })
}

export const updateTimeCard: MutationResolvers['updateTimeCard'] = ({
  id,
  input,
}) => {
  return db.timeCard.update({
    data: input,
    where: { id },
  })
}

export const deleteTimeCard: MutationResolvers['deleteTimeCard'] = ({ id }) => {
  return db.timeCard.delete({
    where: { id },
  })
}

export const TimeCard: TimeCardResolvers = {
  shop: (_obj, { root }) =>
    db.timeCard.findUnique({ where: { id: root.id } }).shop(),
  user: (_obj, { root }) =>
    db.timeCard.findUnique({ where: { id: root.id } }).user(),
}
