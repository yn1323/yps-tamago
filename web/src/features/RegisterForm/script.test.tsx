import { renderHook } from '@redwoodjs/testing/web'

import { useRegisterMutations } from "src/features/RegisterForm/script"
import { useAuthMeta } from 'src/hooks/useAuthMeta'

// import { normal, useMoge } from './script'

describe('ロジック', () => {
  it('renders the title of an article', async () => {


    mockGraphQLQuery('CreateMemberRegisterMutation', (variables) => {
      return {
        createMemberUser: {
          user: {
            userId: 'userId'
          },
          shopUserBegonging: {
            shopId: 'shopId'
          }
        }
      }
    })

    expect(true).toEqual(true)

  })
  it('normal', () => {
    expect(true).toEqual(true)
  })
  // it('hooks', () => {
  //   const { result } = renderHook(() => useMoge())
  //   act(() => {})
  //   expect(result.current).toEqual(500)
  // })
  // it('spyOn', () => {
  //   const spy = jest.spyOn(video, 'play')
  //   const isPlaying = video.play()

  //   expect(spy).toHaveBeenCalled()
  //   expect(isPlaying).toBe(true)

  //   spy.mockRestore()
  // })
})
