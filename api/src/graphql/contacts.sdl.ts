export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @skipAuth
    contact(id: Int!): Contact @skipAuth
  }

  input CreateContactInput {
    name: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @skipAuth
    deleteContact(id: Int!): Contact! @skipAuth
  }
`
