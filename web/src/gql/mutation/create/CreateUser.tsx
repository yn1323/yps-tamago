import {
  CreateMemberRegisterMutation,
  CreateMemberRegisterMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

const CREATE_USER = gql`
  mutation CreateMemberRegisterMutation(
    $userInput: CreateUserInput!
    $shopUserInput: CreateShopUserBelongingInput!
  ) {
    createUser(input: $userInput) {
      userId
    }
    createShopUserBelonging(input: $shopUserInput) {
      shopId
    }
  }
`

export const useCreateUserMutation = () => {
  return useMutation<
    CreateMemberRegisterMutation,
    CreateMemberRegisterMutationVariables
  >(CREATE_USER)
}
