import { FC } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

import { Animation } from 'src/components/Template/Animation'
import { RegisterFormAdmin } from 'src/features/RegisterFormAdmin'
import { RegisterFormMember } from 'src/features/RegisterFormMember'

export const New: FC = () => {
  const { userMetadata } = useAuth()
  const { shopId } = useParams()
  const userName = userMetadata?.user_metadata.full_name ?? ''

  return (
    <Animation>
      {shopId ? (
        <RegisterFormMember shopId={shopId} userName={userName} />
      ) : (
        <>
          <RegisterFormAdmin userName={userName} />
        </>
      )}
    </Animation>
  )
}
