import {
  CreateMemberRegisterMutation,
  CreateMemberRegisterMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

const CREATE_USER = gql`
  mutation CreateMemberRegisterMutation($input: CreateMemberUserInput!) {
    createMemberUser(input: $input) {
      user {
        userId
      }
      shopUserBelonging {
        shopId
      }
    }
  }
`

export const useCreateUserMutation = () => {
  return useMutation<
    CreateMemberRegisterMutation,
    CreateMemberRegisterMutationVariables
  >(CREATE_USER)
}
