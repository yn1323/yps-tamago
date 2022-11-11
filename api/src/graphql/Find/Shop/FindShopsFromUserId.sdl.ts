export const schema = gql`
  input FindShopsFromUserIdInput {
    userId: String!
  }

  type FindShopsFromUserId {
    shops: [Shop!]!
    user: User!
  }

  type Query {
    findShopsFromUserId(input: FindShopsFromUserIdInput!): FindShopsFromUserId!
      @requireAuth
  }
`
