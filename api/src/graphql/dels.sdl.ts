export const schema = gql`
  type Del {
    id: String!
    name: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    dels: [Del!]! @requireAuth
    del(id: String!): Del @requireAuth
  }

  input CreateDelInput {
    name: String!
    message: String!
  }

  input UpdateDelInput {
    name: String
    message: String
  }

  type Mutation {
    createDel(input: CreateDelInput!): Del! @requireAuth
    updateDel(id: String!, input: UpdateDelInput!): Del! @requireAuth
    deleteDel(id: String!): Del! @requireAuth
  }
`
