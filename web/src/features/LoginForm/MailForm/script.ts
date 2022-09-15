import { useEffect, useMemo, useState } from 'react'

import { useToast } from '@chakra-ui/react'
import { Session, User, ApiError, Provider } from '@supabase/supabase-js'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useParams } from '@redwoodjs/router'

import { supabase } from 'src/config/supabase'
import { TOAST_PROPS } from 'src/constants/ui/toast'
import { MailForm } from 'src/features/LoginForm/MailForm'

type FormInput = {
  email: string
  password: string
}

type SignUpResult = {
  user?: User
  session?: Session
  error?: ApiError
}
export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [signUpResult, setSignUpResult] = useState<SignUpResult>({})
  const { signUp: supabaseSignUp } = useAuth()

  const signUp = async ({ email, password }: FormInput) => {
    setIsLoading(true)
    const info = await supabaseSignUp({
      email,
      password,
      redirectTo: `${window.location.host}/login`,
    })
    setSignUpResult(info)
    setIsLoading(false)
  }
  const errorMessage = useMemo(() => {
    if (!isLoading && signUpResult?.error) {
      console.error(signUpResult?.error.message)
      return 'エラーが発生しました。しばらく時間をおいてから再度実行してください。'
    }
    return ''
  }, [isLoading, signUpResult.error])

  const successMessage = useMemo(() => {
    if (Object.keys(signUpResult?.user ?? {}).length) {
      return '登録が完了しました。メールに記載のリンクをクリックしてログインしてください。'
    }
    return ''
  }, [signUpResult.user])

  return {
    isLoading,
    signUp,
    signUpResult,
    errorMessage,
    successMessage,
  }
}

type SignInResult = {
  session?: Session
  user?: User
  provider?: Provider
  url?: string
  error?: ApiError
}
export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [signInResult, setSignInResult] = useState<SignInResult>({})
  const { logIn: supabaseSignIn } = useAuth()
  const { shopId } = useParams()

  const signIn = async ({ email, password }: FormInput) => {
    setIsLoading(true)
    const info = await supabaseSignIn({
      email,
      password,
      redirectTo: `${window.location.host}/dashboard${
        shopId ? `?shopId=${shopId}` : ''
      }`,
    })
    setSignInResult(info)
    setIsLoading(false)
  }
  const errorMessage = useMemo(() => {
    if (!isLoading && signInResult?.error) {
      console.error(signInResult?.error.message)
      return 'ログインに失敗しました。メールアドレス、パスワードを再度確認してください。'
    }
    return ''
  }, [isLoading, signInResult.error])

  useEffect(() => {
    if (signInResult?.session) {
      navigate(routes.dashboard())
    }
  }, [signInResult])

  return {
    isLoading,
    signIn,
    signInResult,
    errorMessage,
  }
}
type ResetPasswordResult = {
  data?: Record<string, unknown>
  error?: ApiError
}
export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [resetPasswordResult, setResetPasswordResult] =
    useState<ResetPasswordResult>({})
  const [success, setSuccess] = useState(false)

  const resetPassword = async ({ email }: Pick<FormInput, 'email'>) => {
    setIsLoading(true)
    setSuccess(false)
    const info = await supabase.auth.api.resetPasswordForEmail(email, {
      redirectTo: `${window.location.host}/login/setPassword`,
    })
    setResetPasswordResult(info)
    setIsLoading(false)
    setSuccess(true)
  }
  const errorMessage = useMemo(() => {
    if (!isLoading && resetPasswordResult?.error) {
      console.error(resetPasswordResult?.error.message)
      return 'エラーが発生しました。しばらく時間をおいてから再度実行してください。'
    }
    return ''
  }, [isLoading, resetPasswordResult.error])
  const successMessage = useMemo(() => {
    if (!isLoading && success) {
      return 'パスワードリセットのリンクを送信しました。メールに記載のリンクをクリックしてください。'
    }
    return ''
  }, [isLoading, success])

  return {
    isLoading,
    resetPassword,
    resetPasswordResult,
    errorMessage,
    successMessage,
  }
}

type SetPasswordResult = {
  data?: User
  user?: User
  error?: ApiError
}
export const useSetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [setPasswordResult, setSetPasswordResult] = useState<SetPasswordResult>(
    {}
  )

  const setPassword = async ({ password }: Pick<FormInput, 'password'>) => {
    setIsLoading(true)
    const info = await supabase.auth.update({ password })

    setSetPasswordResult(info)
    setIsLoading(false)
  }
  const errorMessage = useMemo(() => {
    if (!isLoading && setPasswordResult?.error) {
      console.error(setPasswordResult?.error.message)
      return 'エラーが発生しました。パスワードを再度確認してください。'
    }
    return ''
  }, [isLoading, setPasswordResult.error])

  const successMessage = useMemo(() => {
    if (Object.keys(setPasswordResult?.user ?? {}).length) {
      return 'パスワードをリセットしました。再度ログイン画面からログインしてください。'
    }
    return ''
  }, [setPasswordResult.user])

  return {
    isLoading,
    setPassword,
    setPasswordResult,
    errorMessage,
    successMessage,
  }
}

export const useSubmit = () => {
  const {
    isLoading: signUpIsLoading,
    signUp,
    signUpResult,
    errorMessage: signUpErrorMessage,
    successMessage: signUpSucceedMessage,
  } = useSignUp()
  const {
    isLoading: signInIsLoading,
    signIn,
    signInResult,
    errorMessage: signInErrorMessage,
  } = useSignIn()
  const {
    isLoading: resetPasswordIsLoading,
    resetPassword,
    resetPasswordResult,
    errorMessage: resetPasswordErrorMessage,
    successMessage: resetPasswordSuccessMessage,
  } = useResetPassword()
  const {
    isLoading: setPasswordIsLoading,
    setPassword,
    setPasswordResult,
    errorMessage: setPasswordErrorMessage,
    successMessage: setPasswordSuccessMessage,
  } = useSetPassword()

  const isLoading = useMemo(
    () =>
      signUpIsLoading ||
      signInIsLoading ||
      resetPasswordIsLoading ||
      setPasswordIsLoading,
    [
      signUpIsLoading,
      signInIsLoading,
      resetPasswordIsLoading,
      setPasswordIsLoading,
    ]
  )
  const errorMessage = useMemo(
    () =>
      signUpErrorMessage ||
      signInErrorMessage ||
      resetPasswordErrorMessage ||
      setPasswordErrorMessage,
    [
      signUpErrorMessage,
      signInErrorMessage,
      resetPasswordErrorMessage,
      setPasswordErrorMessage,
    ]
  )
  const result = useMemo(() => {
    if (Object.keys(signUpResult).length) {
      return signUpResult
    }
    if (Object.keys(signInResult).length) {
      return signInResult
    }
    if (Object.keys(resetPasswordResult).length) {
      return resetPasswordResult
    }
    if (Object.keys(setPasswordResult).length) {
      return setPasswordResult
    }
    return {}
  }, [signUpResult, signInResult, resetPasswordResult, setPasswordResult])

  const succeedMessage = useMemo(
    () =>
      signUpSucceedMessage ||
      resetPasswordSuccessMessage ||
      setPasswordSuccessMessage,
    [
      signUpSucceedMessage,
      resetPasswordSuccessMessage,
      setPasswordSuccessMessage,
    ]
  )

  type SubmitType = Required<typeof MailForm.defaultProps>['mailFormType']
  const onSubmit = async (
    submitType: SubmitType,
    { email, password }: FormInput
  ) => {
    switch (submitType) {
      case 'signUp':
        return await signUp({ email, password })
      case 'signIn':
        return await signIn({ email, password })
      case 'resetPassword':
        return await resetPassword({ email })
      case 'setPassword':
        return await setPassword({ password })
      default:
        break
    }
  }

  const toast = useToast()
  useEffect(() => {
    if (!errorMessage) return
    toast({
      ...TOAST_PROPS,
      description: errorMessage,
      status: 'error',
    })
  }, [errorMessage, toast])

  useEffect(() => {
    if (!succeedMessage) return
    toast({
      ...TOAST_PROPS,
      description: succeedMessage,
      status: 'success',
    })
  }, [succeedMessage, toast])

  return {
    onSubmit,
    isLoading,
    errorMessage,
    result,
  }
}
