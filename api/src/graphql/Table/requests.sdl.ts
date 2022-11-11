export const schema = gql`
  type Request {
    id: String!
    shopId: String!
    userId: String!
    dateFrom: DateTime!
    dateTo: DateTime!
    done: Boolean!
    shop: Shop!
    user: User!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    requests: [Request!]! @requireAuth
    request(id: String!): Request @requireAuth
  }

  input CreateRequestInput {
    shopId: String!
    userId: String!
    dateFrom: DateTime!
    dateTo: DateTime!
    done: Boolean!
    isDeleted: Boolean!
  }

  input UpdateRequestInput {
    shopId: String
    userId: String
    dateFrom: DateTime
    dateTo: DateTime
    done: Boolean
    isDeleted: Boolean
  }

  type Mutation {
    createRequest(input: CreateRequestInput!): Request! @requireAuth
    updateRequest(id: String!, input: UpdateRequestInput!): Request!
      @requireAuth
    deleteRequest(id: String!): Request! @requireAuth
  }
`
