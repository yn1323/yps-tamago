export const schema = gql`
  input FindUserInput {
    userId: String!
  }

  type FindUser {
    user: User!
    shopUserBelonging: ShopUserBelonging!
    shop: Shop!
    organizationShopbelonging: OrganizationShopBelonging!
    organization: Organization!
  }

  type Query {
    findUser(input: FindUserInput!): FindUser! @requireAuth
  }
`
