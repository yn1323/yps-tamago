export const schema = gql`
  type User {
    id: Int!
    userId: String!
    name: String!
    avatar: String!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    userId: String!
    name: String!
    avatar: String!
  }

  input UpdateUserInput {
    userId: String
    name: String
    avatar: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
