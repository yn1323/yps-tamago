import { FC } from 'react'

import { Animation } from 'src/components/Template/Animation'
import { CenterBox } from 'src/components/Template/CenterBox'
import { MailForm } from 'src/features/LoginForm/MailForm'

export const LoginRegister: FC = () => {
  return (
    <Animation>
      <CenterBox>
        <MailForm mailFormType="signUp" />
      </CenterBox>
    </Animation>
  )
}
