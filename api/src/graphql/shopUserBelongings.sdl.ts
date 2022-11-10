export const schema = gql`
  type ShopUserBelonging {
    id: String!
    shopId: String!
    userId: String!
    shop: Shop!
    user: User!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    shopUserBelongings: [ShopUserBelonging!]! @requireAuth
    shopUserBelonging(id: String!): ShopUserBelonging @requireAuth
  }

  input CreateShopUserBelongingInput {
    shopId: String!
    userId: String!
    isDeleted: Boolean!
  }

  input UpdateShopUserBelongingInput {
    shopId: String
    userId: String
    isDeleted: Boolean
  }

  type Mutation {
    createShopUserBelonging(
      input: CreateShopUserBelongingInput!
    ): ShopUserBelonging! @requireAuth
    updateShopUserBelonging(
      id: String!
      input: UpdateShopUserBelongingInput!
    ): ShopUserBelonging! @requireAuth
    deleteShopUserBelonging(id: String!): ShopUserBelonging! @requireAuth
  }
`
