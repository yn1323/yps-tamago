export const schema = gql`
  input CreateAdminUserAndShopInput {
    userInput: CreateUserInput!
    shopInput: CreateShopInput!
  }

  type CreateAdminUserAndShop {
    user: User!
    shop: Shop!
    organization: Organization!
  }

  type Mutation {
    createAdminUserAndShop(
      input: CreateAdminUserAndShopInput!
    ): CreateAdminUserAndShop! @requireAuth
  }
`
