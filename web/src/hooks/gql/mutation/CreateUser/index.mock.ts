export const success = () =>
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
  })

export const failure = () =>
  mockGraphQLMutation('CreateMemberRegisterMutation', (variables, { ctx }) => {
    ctx.errors([{ message: 'Error' }])
  })
