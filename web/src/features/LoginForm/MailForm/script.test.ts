import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { useResetPassword, useSignIn, useSignUp, useSubmit } from './script'

describe('ロジック', () => {
  it('新規登録', () => {
    const { result } = renderHook(() => useSignUp())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.signUpResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    act(async () => {
      await result.current.signUp({
        email: 'hoge@aaa.com',
        password: 'password',
      })
    })
    expect(result.current.isLoading).toEqual(true)
  })
  it('ログイン', () => {
    const { result } = renderHook(() => useSignIn())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.signInResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    act(async () => {
      await result.current.signIn({
        email: 'hoge@aaa.com',
        password: 'password',
      })
    })
    expect(result.current.isLoading).toEqual(true)
  })
  it('パスワードリセットの送付', () => {
    const { result } = renderHook(() => useResetPassword())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.resetPasswordResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    act(async () => {
      await result.current.resetPassword({
        email: 'hoge@aaa.com',
      })
    })
    expect(result.current.isLoading).toEqual(true)
  })

  it('パスワード再設定', () => {
    const { result } = renderHook(() => useResetPassword())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.resetPasswordResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    act(async () => {
      await result.current.resetPassword({
        email: 'hoge@aaa.com',
      })
    })
    expect(result.current.isLoading).toEqual(true)
  })
  it('onsubmit', () => {
    const { result } = renderHook(() => useSubmit())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.result).toEqual({})
    expect(result.current.errorMessage).toEqual('')
  })
})
