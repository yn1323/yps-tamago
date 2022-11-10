import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate, validateUniqueness } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ userId }) => {
  validate(userId, 'user.userId', {
    length: {
      between: [32, 36],
      message: 'user.userId has to be 32 ~36',
    },
  })
  return db.user.findUnique({
    where: { userId },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return validateUniqueness(
    'user',
    { userId: input.userId },
    { message: 'User Id already exist' },
    db => db.user.create({ data: input })
  )
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
