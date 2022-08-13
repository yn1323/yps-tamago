import { FC } from 'react'

import { Animation } from 'src/components/Template/Animation'
import { CenterBox } from 'src/components/Template/CenterBox'
import { LoginForm } from 'src/features/LoginForm'

export const Login: FC = () => {
  return (
    <Animation data-testid="login">
      <CenterBox>
        <LoginForm mailFormType="login" />
      </CenterBox>
    </Animation>
  )
}
