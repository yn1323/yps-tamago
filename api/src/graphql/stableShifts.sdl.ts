export const schema = gql`
  type StableShift {
    id: String!
    shopId: String!
    userId: String!
    workFrom: DateTime!
    workTo: DateTime!
    breakFrom: DateTime!
    breakTo: DateTime!
    shop: Shop!
    user: User!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    stableShifts: [StableShift!]! @requireAuth
    stableShift(id: String!): StableShift @requireAuth
  }

  input CreateStableShiftInput {
    shopId: String!
    userId: String!
    workFrom: DateTime!
    workTo: DateTime!
    breakFrom: DateTime!
    breakTo: DateTime!
    isDeleted: Boolean!
  }

  input UpdateStableShiftInput {
    shopId: String
    userId: String
    workFrom: DateTime
    workTo: DateTime
    breakFrom: DateTime
    breakTo: DateTime
    isDeleted: Boolean
  }

  type Mutation {
    createStableShift(input: CreateStableShiftInput!): StableShift! @requireAuth
    updateStableShift(
      id: String!
      input: UpdateStableShiftInput!
    ): StableShift! @requireAuth
    deleteStableShift(id: String!): StableShift! @requireAuth
  }
`
