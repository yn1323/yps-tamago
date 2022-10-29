import { useToast } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { supabase } from 'src/config/supabase'

export const useLogout = () => {
  const { logOut, loading } = useAuth()

  const toast = useToast()

  const logout = async () => {
    const user = supabase.auth.user()
    if (!user) {
      navigate(routes.top())
    }
    await logOut()
      .then(() => navigate(routes.top()))
      .catch(error => showErrorToast(error))
  }

  const showErrorToast = (message: string) => {
    console.error(message)
    toast({
      duration: 5000,
      isClosable: true,
      variant: 'left-accent',
      position: 'top-right',
      description:
        'ログアウトに失敗しました。再度ログアウトを実行してください。',
      status: 'error',
    })
  }

  return {
    logout,
    isLoading: loading,
  }
}
