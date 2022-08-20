import { renderHook, act } from '@redwoodjs/testing/web'

import { useExpandButton } from './script'

describe('ロジック', () => {
  it('useExpandButton', async () => {
    const { result } = renderHook(() => useExpandButton())
    expect(result.current.isExpand).toBeTruthy()
    act(() => {
      result.current.setIsExpand(false)
    })
    expect(result.current.isExpand).toBeFalsy()
    act(() => {
      result.current.setIsExpand(true)
    })
    expect(result.current.isExpand).toBeTruthy()
  })
})
