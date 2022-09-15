import { useMemo } from 'react'

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
  const [createUser, { loading, error, data }] = useMutation<
    CreateMemberRegisterMutation,
    CreateMemberRegisterMutationVariables
  >(CREATE_USER)

  const isError = useMemo(() => {
    if (loading) return false
    return !!error
  }, [loading, error])

  const errorMessage = useMemo(() => {
    if (loading) return ''
    return error?.message ?? ''
  }, [loading, error])

  const isSuccess = useMemo(() => {
    if (loading) return false
    return !!data
  }, [loading, data])

  return {
    createUser,
    loading,
    isError,
    errorMessage,
    isSuccess,
  }
}
