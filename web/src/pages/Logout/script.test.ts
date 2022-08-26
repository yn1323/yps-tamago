import { renderHook } from '@redwoodjs/testing/web'

import { useLogout } from './script'

describe('ロジック', () => {
  it('描画', () => {
    const { result } = renderHook(() => useLogout())
    expect(result.current.isLoading).toEqual(true)
  })
})
