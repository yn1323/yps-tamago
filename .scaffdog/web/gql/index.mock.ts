export const success = () => mockGraphQLMutation(
  '{{ inputs.gqlName | pascal }}',
  () => {
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
  }
)

export const failure = () => mockGraphQLMutation(
  '{{ inputs.gqlName | pascal }}',
  (variables, { ctx }) => {
    ctx.errors([{ message: 'Error' }])
  }
)
