export const schema = gql`
  input FindUserInput {
    userId: String!
  }

  type ShopInfo {
    shop: Shop!
    organization: Organization!
  }

  type FindUser {
    user: User!
    belongs: [ShopInfo!]!
  }

  type Query {
    findUser(input: FindUserInput!): FindUser! @requireAuth
  }
`
