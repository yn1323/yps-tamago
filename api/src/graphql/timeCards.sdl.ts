export const schema = gql`
  type TimeCard {
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
    timeCards: [TimeCard!]! @requireAuth
    timeCard(id: String!): TimeCard @requireAuth
  }

  input CreateTimeCardInput {
    shopId: String!
    userId: String!
    workFrom: DateTime!
    workTo: DateTime!
    breakFrom: DateTime!
    breakTo: DateTime!
    isDeleted: Boolean!
  }

  input UpdateTimeCardInput {
    shopId: String
    userId: String
    workFrom: DateTime
    workTo: DateTime
    breakFrom: DateTime
    breakTo: DateTime
    isDeleted: Boolean
  }

  type Mutation {
    createTimeCard(input: CreateTimeCardInput!): TimeCard! @requireAuth
    updateTimeCard(id: String!, input: UpdateTimeCardInput!): TimeCard!
      @requireAuth
    deleteTimeCard(id: String!): TimeCard! @requireAuth
  }
`
