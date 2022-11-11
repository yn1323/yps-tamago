export const schema = gql`
  type OrganizationShopBelonging {
    id: String!
    organizationId: String!
    shopId: String!
    shop: Shop!
    organization: Organization!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    organizationShopBelongings(
      shopIds: [String!]!
    ): [OrganizationShopBelonging!]! @requireAuth
    organizationShopBelonging(id: String!): OrganizationShopBelonging
      @requireAuth
  }

  input CreateOrganizationShopBelongingInput {
    organizationId: String!
    shopId: String!
    isDeleted: Boolean!
  }

  input UpdateOrganizationShopBelongingInput {
    organizationId: String
    shopId: String
    isDeleted: Boolean
  }

  type Mutation {
    createOrganizationShopBelonging(
      input: CreateOrganizationShopBelongingInput!
    ): OrganizationShopBelonging! @requireAuth
    updateOrganizationShopBelonging(
      id: String!
      input: UpdateOrganizationShopBelongingInput!
    ): OrganizationShopBelonging! @requireAuth
    deleteOrganizationShopBelonging(id: String!): OrganizationShopBelonging!
      @requireAuth
  }
`
