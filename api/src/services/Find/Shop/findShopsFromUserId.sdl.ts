import type { QueryResolvers } from 'types/graphql'

import { shopUserBelongings } from 'src/services/Table/shopUserBelongings/shopUserBelongings'

export const findShopsFromUserId: QueryResolvers['findShopsFromUserId'] =
  async ({ input: { userId } }) => {
    const shopUserBelongingsInfo = await shopUserBelongings({ userId })
    const shop = shopUserBelongingsInfo.map(({ shop }) => shop)
    return { shop }
  }
