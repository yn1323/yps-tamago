export const schema = gql`
  input {{ inputs.gqlName | pascal }}Input {
    userInput: CreateUserInput!
    shopInput: CreateShopInput!
  }

  type {{ inputs.gqlName | pascal }} {
    user: User!
    shopUserBelonging: ShopUserBelonging!
    shop: Shop!
    organizationShopbelonging: OrganizationShopBelonging!
    organization: Organization!
  }

  type {{ inputs.gqlType | pascal }} {
    {{ inputs.gqlName | camel }}(input: {{ inputs.gqlName | pascal }}Input!): {{ inputs.gqlName | pascal }}!
      @requireAuth
  }
`
