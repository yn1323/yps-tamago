export const schema = gql`
  type Operation {
    id: String!
    shopId: String!
    operationName: String!
    icon: String!
    color: String!
    shop: Shop!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    operations: [Operation!]! @requireAuth
    operation(id: String!): Operation @requireAuth
  }

  input CreateOperationInput {
    shopId: String!
    operationName: String!
    icon: String!
    color: String!
    isDeleted: Boolean!
  }

  input UpdateOperationInput {
    shopId: String
    operationName: String
    icon: String
    color: String
    isDeleted: Boolean
  }

  type Mutation {
    createOperation(input: CreateOperationInput!): Operation! @requireAuth
    updateOperation(id: String!, input: UpdateOperationInput!): Operation!
      @requireAuth
    deleteOperation(id: String!): Operation! @requireAuth
  }
`
