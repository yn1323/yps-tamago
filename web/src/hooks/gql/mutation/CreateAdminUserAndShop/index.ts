import { useMemo } from 'react'

import {
  CreateAdminUserAndShop,
  CreateAdminUserAndShopVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

const CREATE_ADMIN_USER_AND_SHOP = gql`
  mutation CreateAdminUserAndShop($input: CreateAdminUserAndShopInput!) {
    createAdminUserAndShop(input: $input) {
      user {
        userId
      }
      shop {
        id
      }
      organization {
        id
        organizationName
      }
    }
  }
`

export const useCreateAdminUserAndShopMutation = () => {
  const [createAdminUserAndShop, { loading, error, data }] = useMutation<
    CreateAdminUserAndShop,
    CreateAdminUserAndShopVariables
  >(CREATE_ADMIN_USER_AND_SHOP)

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
    createAdminUserAndShop,
    loading,
    isError,
    errorMessage,
    isSuccess,
    data,
  }
}
