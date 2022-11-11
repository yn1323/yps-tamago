import type { QueryResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { shopUserBelongings } from 'src/services/Table/shopUserBelongings/shopUserBelongings'

export const findShopsFromUserId: QueryResolvers['findShopsFromUserId'] =
  async ({ input: { userId } }) => {
    if (!userId) {
      throw new ServiceValidationError('User id requred')
    }
    const shopUserBelongingsInfo = await shopUserBelongings({
      userId,
    })

    const shops = shopUserBelongingsInfo.length
      ? shopUserBelongingsInfo.map(({ shop }) => shop)
      : []
    const user = shopUserBelongingsInfo.length
      ? shopUserBelongingsInfo[0].user
      : {}
    return {
      shops,
      user,
    }
  }
