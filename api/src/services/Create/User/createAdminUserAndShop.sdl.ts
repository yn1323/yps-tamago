import type { MutationResolvers } from 'types/graphql'

import { ServiceValidationError } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { user } from 'src/services/users/users'

export const createAdminUserAndShop: MutationResolvers['createAdminUserAndShop'] =
  async ({ input }) => {
    const { userInput, shopInput } = input
    const res = await db
      .$transaction(async db => {
        const userInfo = await user({
          userId: userInput.userId,
        })
        if (userInfo) {
          throw new ServiceValidationError('User Already Exists')
        }

        const [organizationInfo, shopInfo] = await Promise.all([
          await db.organization.create({
            data: {
              organizationName: `${shopInput.shopName}グループ`,
              isDeleted: false,
            },
          }),
          await db.shop.create({ data: shopInput }),
        ]).catch(e => {
          throw new ServiceValidationError(e)
        })

        const [createdUser, ..._] = await Promise.all([
          await db.user.create({ data: userInput }),
          await db.shopUserBelonging.create({
            data: {
              shopId: shopInfo.id,
              userId: userInput.userId,
              isDeleted: false,
            },
          }),
          await db.organizationShopBelonging.create({
            data: {
              organizationId: organizationInfo.id,
              shopId: shopInfo.id,
              isDeleted: false,
            },
          }),
        ])

        return {
          userInfo: createdUser,
          shopInfo,
          organizationInfo,
        }
      })
      .catch(e => {
        throw new ServiceValidationError(e)
      })

    return {
      user: res.userInfo,
      shop: res.shopInfo,
      organization: res.organizationInfo,
    }
  }
