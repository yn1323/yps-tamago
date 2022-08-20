import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import {
  useResetPassword,
  useSignIn,
  useSignUp,
  useSubmit,
  useSetPassword,
} from './script'

describe('ロジック', () => {
  it('新規登録', async () => {
    const { result } = renderHook(() => useSignUp())
    jest.spyOn(result.current, 'signUp').mockImplementation(jest.fn())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.signUpResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    await act(async () => {
      await result.current.signUp({
        email: 'hoge@aaa.com',
        password: 'password',
      })
    })
  })
  it('ログイン', async () => {
    const { result } = renderHook(() => useSignIn())
    jest.spyOn(result.current, 'signIn').mockImplementation(jest.fn())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.signInResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    await act(async () => {
      await result.current.signIn({
        email: 'hoge@aaa.com',
        password: 'password',
      })
    })
  })
  it('パスワードリセットの送付', async () => {
    const { result } = renderHook(() => useResetPassword())
    jest.spyOn(result.current, 'resetPassword').mockImplementation(jest.fn())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.resetPasswordResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    await act(async () => {
      await result.current.resetPassword({
        email: 'hoge@aaa.com',
      })
    })
  })

  it('パスワード再設定', async () => {
    const { result } = renderHook(() => useSetPassword())
    jest.spyOn(result.current, 'setPassword').mockImplementation(jest.fn())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.setPasswordResult).toEqual({})
    expect(result.current.errorMessage).toEqual('')
    await act(async () => {
      await result.current.setPassword({
        password: 'password',
      })
    })
  })
  it('onsubmit', () => {
    const { result } = renderHook(() => useSubmit())
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.result).toEqual({})
    expect(result.current.errorMessage).toEqual('')
  })
})
