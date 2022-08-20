import { FC, useEffect, useMemo } from 'react'

import { Button } from '@chakra-ui/react'

import { Animation } from 'src/components/Template/Animation'
import { CenterBox } from 'src/components/Template/CenterBox'

import { useLogout } from './script'

export const Logout: FC = () => {
  const { logout, isLoading } = useLogout()
  useEffect(() => {
    logout()
  }, [])

  const logoutText = useMemo(
    () => (isLoading ? 'ログアウト中...' : 'ログアウトする'),
    [isLoading]
  )

  return (
    <Animation>
      <CenterBox>
        <Button
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="start"
          isLoading={isLoading}
          aria-busy={isLoading}
          aria-live={isLoading ? 'polite' : undefined}
        >
          {logoutText}
        </Button>
      </CenterBox>
    </Animation>
  )
}
