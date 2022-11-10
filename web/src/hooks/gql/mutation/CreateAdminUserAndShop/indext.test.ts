import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { useCreateAdminUserAndShopMutation } from 'src/hooks/gql/mutation/CreateAdminUserAndShop'
import { CreateAdminUserAndShopMock } from 'src/hooks/gql/mutation/CreateAdminUserAndShop/index.mock'

describe('mutation/CreateAdminUserAndShop', () => {
  it('Success', async () => {
    CreateAdminUserAndShopMock.success()
    const { result } = renderHook(() => useCreateAdminUserAndShopMutation())
    expect(result.current.isError).toBeFalsy()
    expect(result.current.isSuccess).toBeFalsy()
    expect(result.current.errorMessage).toEqual('')
    expect(result.current.loading).toBeFalsy()
    await act(async () => {
      await result.current.createAdminUserAndShop({
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
            shopInput: {
              shopName: 'shopName',
              openTime: '10:00',
              closeTime: '20:00',
              timeUnit: 30,
              submitFrequency: '2w',
              avatar: '',
              useTimeCard: false,
              isDeleted: false,
            },
          },
        },
      })
      expect(result.current.isSuccess).toBeTruthy()
    })
  })
  it('Failure', async () => {
    CreateAdminUserAndShopMock.failure()
    const { result } = renderHook(() => useCreateAdminUserAndShopMutation())
    expect(result.current.isSuccess).toBeFalsy()
    await act(async () => {
      await result.current.createAdminUserAndShop().catch(() => {
        expect(result.current.errorMessage).toBe('Error')
        expect(result.current.isError).toBeTruthy()
        expect(result.current.isSuccess).toBeFalsy()
      })
    })
  })
})
