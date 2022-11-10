import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const operations: QueryResolvers['operations'] = () => {
  return db.operation.findMany()
}

export const operation: QueryResolvers['operation'] = ({ id }) => {
  return db.operation.findUnique({
    where: { id },
  })
}

export const createOperation: MutationResolvers['createOperation'] = ({
  input,
}) => {
  return db.operation.create({
    data: input,
  })
}

export const updateOperation: MutationResolvers['updateOperation'] = ({
  id,
  input,
}) => {
  return db.operation.update({
    data: input,
    where: { id },
  })
}

export const deleteOperation: MutationResolvers['deleteOperation'] = ({
  id,
}) => {
  return db.operation.delete({
    where: { id },
  })
}
