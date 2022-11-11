export const schema = gql`
  type Organization {
    id: String!
    organizationName: String!
    shop: [OrganizationShopBelonging]!
    temporaryClosed: [TemporaryClosed]!
    announce: [Announce]!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(id: String!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    organizationName: String!
    isDeleted: Boolean!
  }

  input UpdateOrganizationInput {
    organizationName: String
    isDeleted: Boolean
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      id: String!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(id: String!): Organization! @requireAuth
  }
`
