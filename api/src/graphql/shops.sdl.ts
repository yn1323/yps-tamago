export const schema = gql`
  type Shop {
    id: String!
    shopName: String!
    openTime: DateTime!
    closeTime: DateTime!
    timeUnit: Int!
    submitFrequency: String!
    avatar: String!
    useTimeCard: Boolean!
    organization: [OrganizationShopBelonging]!
    user: [ShopUserBelonging]!
    operation: [Operation]!
    stableShift: [StableShift]!
    unstableShift: [UnstableShift]!
    request: [Request]!
    timeCard: [TimeCard]!
    temporaryClosed: [TemporaryClosed]!
    announce: [Announce]!
    isDeleted: Boolean!
    createdAt: DateTime!
  }

  type Query {
    shops: [Shop!]! @requireAuth
    shop(id: String!): Shop @requireAuth
  }

  input CreateShopInput {
    shopName: String!
    openTime: DateTime!
    closeTime: DateTime!
    timeUnit: Int!
    submitFrequency: String!
    avatar: String!
    useTimeCard: Boolean!
    isDeleted: Boolean!
  }

  input UpdateShopInput {
    shopName: String
    openTime: DateTime
    closeTime: DateTime
    timeUnit: Int
    submitFrequency: String
    avatar: String
    useTimeCard: Boolean
    isDeleted: Boolean
  }

  type Mutation {
    createShop(input: CreateShopInput!): Shop! @requireAuth
    updateShop(id: String!, input: UpdateShopInput!): Shop! @requireAuth
    deleteShop(id: String!): Shop! @requireAuth
  }
`
