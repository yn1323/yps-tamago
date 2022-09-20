import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { useRegisterMutations } from 'src/features/RegisterFormMember/script'
import { CreateMemberRegisterMutationMock } from 'src/hooks/gql/mutation/CreateUser/index.mock'

describe('ロジック', () => {
  it('useRegisterMutations > Success', async () => {
    CreateMemberRegisterMutationMock.success()
    const { result } = renderHook(() => useRegisterMutations())

    await act(async () => {
      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.errorMessage).toEqual('')
      expect(result.current.isSuccess).toBeFalsy()
      const ret = await result.current.register({
        shopId: 'shopId',
        userName: 'userName',
      })
      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.errorMessage).toBe('')
      expect(result.current.isSuccess).toBeTruthy()
      expect(ret).toHaveProperty('data')
    })
  })

  it('useRegisterMutations > Failure', async () => {
    CreateMemberRegisterMutationMock.failure()
    const { result } = renderHook(() => useRegisterMutations())

    await act(async () => {
      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.errorMessage).toEqual('')
      expect(result.current.isSuccess).toBeFalsy()
      await result.current
        .register({
          shopId: 'shopId',
          userName: 'userName',
        })
        .catch(() => {
          expect(result.current.isLoading).toBeFalsy()
          expect(result.current.errorMessage).toBe('Error')
          expect(result.current.isSuccess).toBeFalsy()
        })
    })
  })
})
