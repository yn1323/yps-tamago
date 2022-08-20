import { useState } from 'react'

import { useToast } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import { supabase } from 'src/config/supabase'

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  const logout = async () => {
    setIsLoading(true)
    const user = supabase.auth.user()
    if (!user) {
      navigate(routes.top())
    }
    const { error } = await supabase.auth.signOut()
    setIsLoading(false)
    !error ? navigate(routes.top()) : showErrorToast(error.message)
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
    isLoading,
  }
}
