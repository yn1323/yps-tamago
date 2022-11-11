export const schema = gql`
  type TemporaryClosed {
    id: String!
    organizationId: String!
    shopId: String!
    date: DateTime!
    organization: Organization!
    shop: Shop!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    temporaryCloseds: [TemporaryClosed!]! @requireAuth
    temporaryClosed(id: String!): TemporaryClosed @requireAuth
  }

  input CreateTemporaryClosedInput {
    organizationId: String!
    shopId: String!
    date: DateTime!
    isDeleted: Boolean!
  }

  input UpdateTemporaryClosedInput {
    organizationId: String
    shopId: String
    date: DateTime
    isDeleted: Boolean
  }

  type Mutation {
    createTemporaryClosed(input: CreateTemporaryClosedInput!): TemporaryClosed!
      @requireAuth
    updateTemporaryClosed(
      id: String!
      input: UpdateTemporaryClosedInput!
    ): TemporaryClosed! @requireAuth
    deleteTemporaryClosed(id: String!): TemporaryClosed! @requireAuth
  }
`
