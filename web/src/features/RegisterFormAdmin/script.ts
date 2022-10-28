import { useEffect } from 'react'

import { useToast } from '@chakra-ui/react'

import { useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import { TOAST_PROPS } from 'src/constants/ui/toast'
import { RegisterFormAdmin } from 'src/features/RegisterFormAdmin'
import { useCreateAdminUserAndShopMutation } from 'src/hooks/gql/mutation/CreateAdminUserAndShop'
import { useAuthMeta } from 'src/hooks/useAuthMeta'

type FormValues = Required<typeof RegisterFormAdmin.defaultProps>
export const useRegisterMutations = () => {
  const {
    id: userId,
    user_metadata: { avatar_url: avatarUrl, email },
  } = useAuthMeta()
  const toast = useToast()

  const { createAdminUserAndShop, loading, errorMessage, isSuccess } =
    useCreateAdminUserAndShopMutation()

  useEffect(() => {
    if (!errorMessage) return
    toast({
      ...TOAST_PROPS,
      description: '登録できませんでした。入力内容を確認してください。',
      status: 'error',
    })
  }, [errorMessage, toast])
  useEffect(() => {
    if (!isSuccess) return
    toast({
      ...TOAST_PROPS,
      description: '登録が完了しました。',
      status: 'success',
    })
    navigate(routes.dashboard())
  }, [isSuccess, toast])

  const register = async ({
    userName,
    shopName,
    openTime,
    closeTime,
    submitFrequency,
    useTimeCard,
  }) => {
    await createAdminUserAndShop({
      variables: {
        input: {
          userInput: {
            userId,
            avatar: avatarUrl ?? '',
            email: email ?? '',
            userName: userName,
            role: 'admin',
            isDeleted: false,
          },
          shopInput: {
            shopName,
            openTime,
            closeTime,
            timeUnit: 30,
            submitFrequency,
            avatar: '',
            useTimeCard,
            isDeleted: false,
          },
        },
      },
    })
  }

  return { isLoading: loading, register, errorMessage, isSuccess }
}

export const useRegisterFormAdmin = (defaultValues: FormValues) => {
  const { register, isLoading } = useRegisterMutations()
  const methods = useForm<FormValues>({
    defaultValues,
  })

  return {
    methods,
    register,
    isLoading: isLoading || methods.formState.isSubmitting,
  }
}
