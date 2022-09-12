import { FC } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

import { Animation } from 'src/components/Template/Animation'
import { RegisterForm } from 'src/features/RegisterForm'

export const New: FC = () => {
  const { userMetadata } = useAuth()
  const { shopId } = useParams()
  const userName = userMetadata?.user_metadata.ful_name ?? ''
  return (
    <Animation>
      {shopId ? (
        <RegisterForm shopId={shopId} userName={userName} />
      ) : (
        <div></div>
        // <FormRegisterAdmin />
      )}
    </Animation>
  )
}
