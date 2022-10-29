export const CreateMemberRegisterMutationMock = {
  success: () =>
    mockGraphQLMutation('CreateMemberRegisterMutation', () => {
      return {
        createMemberUser: {
          user: {
            userId: 'userId',
          },
          shopUserBelonging: {
            shopId: 'shopId',
          },
        },
      }
    }),
  failure: () =>
    mockGraphQLMutation(
      'CreateMemberRegisterMutation',
      (variables, { ctx }) => {
        ctx.errors([{ message: 'Error' }])
      }
    ),
}
