export const schema = gql`
  input CreateMemberUserInput {
    userInput: CreateUserInput!
    shopUserBelongingInput: CreateShopUserBelongingInput!
  }

  type CreateMemberUser {
    user: User!
    shopUserBelonging: ShopUserBelonging!
  }

  type Mutation {
    createMemberUser(input: CreateMemberUserInput!): CreateMemberUser!
      @requireAuth
  }
`
