import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { useCreateUserMutation } from 'src/hooks/gql/mutation/CreateUser'

import { CreateMemberRegisterMutationMock } from './index.mock'

describe('CreateMemberRegisterMutation', () => {
  it('Success', async () => {
    CreateMemberRegisterMutationMock.success()
    const { result } = renderHook(() => useCreateUserMutation())
    expect(result.current.isError).toBeFalsy()
    expect(result.current.isSuccess).toBeFalsy()
    expect(result.current.errorMessage).toEqual('')
    expect(result.current.loading).toBeFalsy()
    await act(async () => {
      await result.current.createUser({
        variables: {
          input: {
            userInput: {
              userId: 'userId',
              avatar: '',
              email: '',
              role: 'member',
              userName: '',
              isDeleted: false,
            },
            shopUserBelongingInput: {
              shopId: 'shopId',
              userId: 'userId',
              isDeleted: false,
            },
          },
        },
      })
      expect(result.current.isSuccess).toBeTruthy()
    })
  })
  it('Failure', async () => {
    CreateMemberRegisterMutationMock.failure()
    const { result } = renderHook(() => useCreateUserMutation())
    expect(result.current.isSuccess).toBeFalsy()
    await act(async () => {
      await result.current.createUser().catch(() => {
        expect(result.current.errorMessage).toBe('Error')
        expect(result.current.isError).toBeTruthy()
        expect(result.current.isSuccess).toBeFalsy()
      })
    })
  })
})
