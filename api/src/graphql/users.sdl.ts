export const schema = gql`
  type User {
    id: Int!
    userId: String!
    name: String!
    avatar: String!
    role: String!
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
    role: String!
  }

  input UpdateUserInput {
    userId: String
    name: String
    avatar: String
    role: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
