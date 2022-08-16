import { renderHook } from '@redwoodjs/testing/web'

import { normal, useMoge } from '.'

describe('ロジック', () => {
  it('normal', () => {
    expect(normal()).toEqual(500)
  })
  it('hooks', () => {
    const { result } = renderHook(() => useMoge())
    expect(result.current).toEqual(500)
  })
  test('spyOn', () => {
    const spy = jest.spyOn(video, 'play')
    const isPlaying = video.play()

    expect(spy).toHaveBeenCalled()
    expect(isPlaying).toBe(true)

    spy.mockRestore()
  })
})

