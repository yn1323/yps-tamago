import { useForm } from '@redwoodjs/forms'

import { useCreateUserMutation } from 'src/gql/mutation/create/CreateUser'
import { useAuthMeta } from 'src/hooks/useAuthMeta'

import { RegisterForm } from '.'

type FormValues = Required<typeof RegisterForm.defaultProps>

const useRegisterMutations = () => {
  const {
    id: userId,
    user_metadata: { avatar_url: avatarUrl, email },
  } = useAuthMeta()

  const [createUser, { loading, error }] = useCreateUserMutation()

  console.log(error?.message)

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
