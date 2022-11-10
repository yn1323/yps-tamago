import type { QueryResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { findShopsFromUserId } from 'src/services/Find/Shop/findShopsFromUserId.sdl'
import { user } from 'src/services/users/users'

export const findUser: QueryResolvers['findUser'] = async ({ input }) => {
  const { userId } = input
  const userInfo = await user({
    userId,
  })
  if (!userInfo) {
    throw new ServiceValidationError('User Not Found')
  }

  const shops = await findShopsFromUserId({
    input: { userId },
  })

  return { user: userInfo }
}
