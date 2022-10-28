export const CreateAdminUserAndShopMock = {
  success: () =>
    mockGraphQLMutation('CreateAdminUserAndShop', () => {
      return {
        createAdminUserAndShop: {
          user: {
            userId: 'userId',
          },
          shop: {
            id: 'shopId',
            shopName: 'shopName',
          },
          organization: {
            id: 'organizationId',
            organizationName: 'groupName',
          },
        },
      }
    }),
  failure: () =>
    mockGraphQLMutation('CreateAdminUserAndShop', (variables, { ctx }) => {
      ctx.errors([{ message: 'Error' }])
    }),
}
