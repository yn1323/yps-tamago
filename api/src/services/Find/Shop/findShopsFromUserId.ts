import type { QueryResolvers } from 'types/graphql'

import { shopUserBelongings } from 'src/services/Table/shopUserBelongings/shopUserBelongings'

export const findShopsFromUserId: QueryResolvers['findShopsFromUserId'] =
  async ({ input: { userId } }) => {
    const shopUserBelongingsInfo = await shopUserBelongings({
      userId,
    })

    const shops = shopUserBelongingsInfo.length
      ? shopUserBelongingsInfo.map(({ shop }) => shop)
      : []
    const user = shopUserBelongingsInfo.length
      ? shopUserBelongingsInfo[0].user
      : {}
    console.log({
      shops,
      user,
    })
    return {
      shops,
      user,
    }
  }
