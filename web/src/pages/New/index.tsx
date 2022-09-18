import { FC } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useParams } from '@redwoodjs/router'

import { Animation } from 'src/components/Template/Animation'
import { RegisterFormMember } from 'src/features/RegisterFormMember'

export const New: FC = () => {
  const { userMetadata } = useAuth()
  const { shopId } = useParams()
  const userName = userMetadata?.user_metadata.full_name ?? ''

  // TODO: ユーザーが存在する場合、/dashboardにリダイレクト

  return (
    <Animation>
      {shopId ? (
        <RegisterFormMember shopId={shopId} userName={userName} />
      ) : (
        <button onClick={() => navigate(routes.dashboard())}>aa</button>
        // <FormRegisterAdmin />
      )}
    </Animation>
  )
}
