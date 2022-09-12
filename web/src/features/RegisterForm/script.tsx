import {
  CreateMemberRegisterMutation,
  CreateMemberRegisterMutationVariables,
} from 'types/graphql'

import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuthMeta } from 'src/hooks/useAuthMeta'

import { RegisterForm } from '.'

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

type FormValues = Required<typeof RegisterForm.defaultProps>

const useRegisterMutations = () => {
  const {
    id: userId,
    user_metadata: { avatar_url: avatarUrl, email },
  } = useAuthMeta()

  const [createUser, { loading, error }] = useMutation<
    CreateMemberRegisterMutation,
    CreateMemberRegisterMutationVariables
  >(CREATE_USER)

  const register = async ({ shopId, userName }) => {
    createUser({
      variables: {
        userInput: {
          userId,
          avatar: avatarUrl ?? '',
          email: email ?? '',
          role: 'member',
          userName: userName,
          isDeleted: false,
        },
        shopUserInput: {
          shopId: 'c6decb9c-1552-4815-b940-a0eaaae7e6db',
          userId,
          isDeleted: false,
        },
      },
    })
  }

  return { isLoading: loading, register }
}

export const useRegisterForm = ({ shopId, userName }) => {
  const { register, isLoading } = useRegisterMutations()
  const methods = useForm<FormValues>({
    defaultValues: { shopId, userName },
  })

  return {
    methods,
    register,
    isLoading: isLoading || methods.formState.isSubmitting,
  }
}
