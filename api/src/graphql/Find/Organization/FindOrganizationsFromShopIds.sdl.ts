export const schema = gql`
  input FindOrganizationsFromShopIdsInput {
    shopIds: [String!]!
  }

  type ShopMatchedOrganizations {
    shop: Shop!
    organization: Organization!
  }

  type FindOrganizationsFromShopIds {
    shopMatchedOrganizations: [ShopMatchedOrganizations!]!
  }

  type Query {
    findOrganizationsFromShopIds(
      input: FindOrganizationsFromShopIdsInput!
    ): FindOrganizationsFromShopIds! @requireAuth
  }
`
