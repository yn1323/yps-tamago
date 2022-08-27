import { renderHook } from '@redwoodjs/testing/web'

describe('ロジック', () => {
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
