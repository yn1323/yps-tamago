export const schema = gql`
  type User {
    id: String!
    userName: String!
    avatar: String!
    role: String!
    email: String!
    shop: [ShopUserBelonging]!
    stableShift: [StableShift]!
    unstableShift: [UnstableShift]!
    request: [Request]!
    timeCard: [TimeCard]!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    userName: String!
    avatar: String!
    role: String!
    email: String!
    isDeleted: Boolean!
  }

  input UpdateUserInput {
    userName: String
    avatar: String
    role: String
    email: String
    isDeleted: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
