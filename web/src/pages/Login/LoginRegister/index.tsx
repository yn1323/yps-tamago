import { FC } from 'react'

import { Animation } from 'src/components/Template/Animation'
import { CenterBox } from 'src/components/Template/CenterBox'
import { MailForm } from 'src/features/LoginForm/MailForm'

export const LoginRegister: FC = () => {
  return (
    <Animation data-testid="login">
      <CenterBox>
        <MailForm mailFormType="signUp" />
      </CenterBox>
    </Animation>
  )
}
