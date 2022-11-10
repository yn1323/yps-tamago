export const schema = gql`
  type UnstableShift {
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
    unstableShifts: [UnstableShift!]! @requireAuth
    unstableShift(id: String!): UnstableShift @requireAuth
  }

  input CreateUnstableShiftInput {
    shopId: String!
    userId: String!
    workFrom: DateTime!
    workTo: DateTime!
    breakFrom: DateTime!
    breakTo: DateTime!
    isDeleted: Boolean!
  }

  input UpdateUnstableShiftInput {
    shopId: String
    userId: String
    workFrom: DateTime
    workTo: DateTime
    breakFrom: DateTime
    breakTo: DateTime
    isDeleted: Boolean
  }

  type Mutation {
    createUnstableShift(input: CreateUnstableShiftInput!): UnstableShift!
      @requireAuth
    updateUnstableShift(
      id: String!
      input: UpdateUnstableShiftInput!
    ): UnstableShift! @requireAuth
    deleteUnstableShift(id: String!): UnstableShift! @requireAuth
  }
`
