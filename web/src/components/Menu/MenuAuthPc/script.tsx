import { useState } from 'react'

const LS_MENU_EXPAND_KEY = 'authLayoutPC'

export const useExpandButton = () => {
  const [isExpand, _setIsExpand] = useState(
    !!parseInt(localStorage.getItem(LS_MENU_EXPAND_KEY) ?? '1', 10)
  )

  const setIsExpand = (nextExpandState: boolean) => {
    localStorage.setItem(LS_MENU_EXPAND_KEY, nextExpandState ? '0' : '1')
    _setIsExpand(nextExpandState)
  }

  return {
    isExpand,
    setIsExpand,
  }
}
