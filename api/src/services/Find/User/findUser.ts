import type { QueryResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { findOrganizationsFromShopIds } from 'src/services/Find/Organization/findOrganizationsFromShopIds'
import { findShopsFromUserId } from 'src/services/Find/Shop/findShopsFromUserId'
import { user } from 'src/services/Table/users/users'

export const findUser: QueryResolvers['findUser'] = async ({
  input: { userId },
}) => {
  if (!userId) {
    throw new ServiceValidationError('User id is required')
  }
  const userInfo = await user({
    userId,
  })
  if (!userInfo) {
    throw new ServiceValidationError('User Not Found')
  }

  const { shops } = await findShopsFromUserId({
    input: { userId },
  })
  const shopIds = shops.map(({ id }) => id)

  const { shopMatchedOrganizations: belongs } =
    await findOrganizationsFromShopIds({
      input: { shopIds },
    })

  return { user: userInfo, belongs }
}
