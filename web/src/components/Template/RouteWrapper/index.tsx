import { FC, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const RouteWrapper: FC<PropTypes> = ({ children }) => {
  const { isAuthenticated, hasRole } = useAuth()
  const urlParams = new URLSearchParams(window.location.search)
  const shopId = urlParams.get('shopId')

  useEffect(() => {
    const isInitialLogin = isAuthenticated && hasRole('new')
    if (isInitialLogin) {
      navigate(routes.new(shopId ? { shopId } : {}))
    }

    const isRegistered = isAuthenticated && !hasRole('new')
    if (isRegistered) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated, hasRole, shopId])

  return <>{children}</>
}
