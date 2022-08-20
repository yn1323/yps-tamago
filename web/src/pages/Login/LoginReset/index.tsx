import { FC } from 'react'

import { Animation } from 'src/components/Template/Animation'
import { CenterBox } from 'src/components/Template/CenterBox'
import { MailForm } from 'src/features/LoginForm/MailForm'

export const LoginReset: FC = () => {
  return (
    <Animation>
      <CenterBox>
        <MailForm mailFormType="resetPassword" />
      </CenterBox>
    </Animation>
  )
}
