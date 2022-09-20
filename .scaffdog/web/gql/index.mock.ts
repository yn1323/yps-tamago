export const {{ inputs.gqlName | pascal }}Mock = {
  success = () => mockGraphQLMutation(
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
  ),
  failure = () => mockGraphQLMutation(
    '{{ inputs.gqlName | pascal }}',
    (variables, { ctx }) => {
      ctx.errors([{ message: 'Error' }])
    }
  )
}
