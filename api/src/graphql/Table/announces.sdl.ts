export const schema = gql`
  type Announce {
    id: String!
    organizationId: String!
    shopId: String!
    message: String!
    organization: Organization!
    shop: Shop!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    announces: [Announce!]! @requireAuth
    announce(id: String!): Announce @requireAuth
  }

  input CreateAnnounceInput {
    organizationId: String!
    shopId: String!
    message: String!
    isDeleted: Boolean!
  }

  input UpdateAnnounceInput {
    organizationId: String
    shopId: String
    message: String
    isDeleted: Boolean
  }

  type Mutation {
    createAnnounce(input: CreateAnnounceInput!): Announce! @requireAuth
    updateAnnounce(id: String!, input: UpdateAnnounceInput!): Announce!
      @requireAuth
    deleteAnnounce(id: String!): Announce! @requireAuth
  }
`
