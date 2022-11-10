export const schema = gql`
  input FindShopsFromUserIdInput {
    userId: String!
  }

  type FindShopsFromUserId {
    shop: [Shop!]!
  }

  type Query {
    findShopsFromUserId(input: FindShopsFromUserIdInput!): FindShopsFromUserId!
      @requireAuth
  }
`
