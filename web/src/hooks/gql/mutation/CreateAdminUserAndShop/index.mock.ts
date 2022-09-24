export const CreateAdminUserAndShopMock = {
  success: () =>
    mockGraphQLMutation('CreateAdminUserAndShop', () => {
      return {
        createMemberUser: {
          user: {
            userId: 'userId',
          },
          shop: {
            shopName: 'shopName',
          },
          organization: {
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
