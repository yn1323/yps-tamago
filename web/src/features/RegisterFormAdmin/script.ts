import { useEffect } from 'react'

import { useToast } from '@chakra-ui/react'

import { useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import { TOAST_PROPS } from 'src/constants/ui/toast'
import { RegisterFormAdmin } from 'src/features/RegisterFormAdmin'
import { useCreateUserMutation } from 'src/hooks/gql/mutation/CreateUser'
import { useAuthMeta } from 'src/hooks/useAuthMeta'

type FormValues = Required<typeof RegisterFormAdmin.defaultProps> & {
  userName: string
  shopName: string
  openTime: string
  closeTime: string
  submitFrequency: string
  useTimeCard: boolean
}

export const useRegisterMutations = () => {
  const {
    id: userId,
    user_metadata: { avatar_url: avatarUrl, email },
  } = useAuthMeta()
  const toast = useToast()

  const { createUser, loading, errorMessage, isSuccess } =
    useCreateUserMutation()

  useEffect(() => {
    if (!errorMessage) return
    toast({
      ...TOAST_PROPS,
      description: '店舗IDが誤っているか、ユーザーが既に登録されています。',
      status: 'error',
    })
  }, [errorMessage, toast])
  useEffect(() => {
    // TODO: 画面遷移に変更する
    if (!isSuccess) return
    toast({
      ...TOAST_PROPS,
      description: '登録が完了しました。',
      status: 'success',
    })
    navigate(routes.dashboard())
  }, [isSuccess, toast])

  const register = async ({ shopId, userName }) => {
    await createUser({
      variables: {
        input: {
          userInput: {
            userId,
            avatar: avatarUrl ?? '',
            email: email ?? '',
            role: 'member',
            userName: userName,
            isDeleted: false,
          },
          shopUserBelongingInput: {
            shopId,
            userId,
            isDeleted: false,
          },
        },
      },
    })
  }

  return { isLoading: loading, register, errorMessage, isSuccess }
}

export const useRegisterFormAdmin = ({ userName }) => {
  const { register, isLoading } = useRegisterMutations()
  const methods = useForm<FormValues>({
    defaultValues: { userName },
  })

  return {
    methods,
    register,
    isLoading: isLoading || methods.formState.isSubmitting,
  }
}