import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const temporaryCloseds: QueryResolvers['temporaryCloseds'] = () => {
  return db.temporaryClosed.findMany()
}

export const temporaryClosed: QueryResolvers['temporaryClosed'] = ({ id }) => {
  return db.temporaryClosed.findUnique({
    where: { id },
  })
}

export const createTemporaryClosed: MutationResolvers['createTemporaryClosed'] =
  ({ input }) => {
    return db.temporaryClosed.create({
      data: input,
    })
  }

export const updateTemporaryClosed: MutationResolvers['updateTemporaryClosed'] =
  ({ id, input }) => {
    return db.temporaryClosed.update({
      data: input,
      where: { id },
    })
  }

export const deleteTemporaryClosed: MutationResolvers['deleteTemporaryClosed'] =
  ({ id }) => {
    return db.temporaryClosed.delete({
      where: { id },
    })
  }
