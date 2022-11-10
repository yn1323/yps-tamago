import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const requests: QueryResolvers['requests'] = () => {
  return db.request.findMany()
}

export const request: QueryResolvers['request'] = ({ id }) => {
  return db.request.findUnique({
    where: { id },
  })
}

export const createRequest: MutationResolvers['createRequest'] = ({
  input,
}) => {
  return db.request.create({
    data: input,
  })
}

export const updateRequest: MutationResolvers['updateRequest'] = ({
  id,
  input,
}) => {
  return db.request.update({
    data: input,
    where: { id },
  })
}

export const deleteRequest: MutationResolvers['deleteRequest'] = ({ id }) => {
  return db.request.delete({
    where: { id },
  })
}
