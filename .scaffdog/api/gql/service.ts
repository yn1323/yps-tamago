import type { {{ inputs.gqlType | pascal }}Resolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { shop } from 'src/services/shops/shops'
import { user } from 'src/services/users/users'

export const {{ inputs.gqlName | camel }}: {{ inputs.gqlType | pascal }}Resolvers['{{ inputs.gqlName | camel }}'] = async ({
  input,
}) => {
  const { userInput, shopUserBelongingInput } = input
  const [userInfo, shopUserBelongingInfo] = await db
    .$transaction(async db => {
      const userInfo = await user({
        userId: userInput.userId,
      })
      if (userInfo) {
        throw new ServiceValidationError('User Already Exists')
      }
      const shopInfo = await shop({
        id: shopUserBelongingInput.shopId,
      })
      if (!shopInfo) {
        throw new ServiceValidationError('Shop does not exists')
      }

      return Promise.all([
        await db.user.create({ data: userInput }),
        await db.shopUserBelonging.create({ data: shopUserBelongingInput }),
      ])
    })
    .catch(e => {
      throw new ServiceValidationError(e)
    })

  return { user: userInfo, shopUserBelonging: shopUserBelongingInfo }
}
