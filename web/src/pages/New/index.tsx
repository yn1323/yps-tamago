import { FC } from 'react'

import { useParams } from '@redwoodjs/router'

import { Animation } from 'src/components/Template/Animation'
import { RegisterForm } from 'src/features/RegisterForm'

export const New: FC = () => {
  const { shopId } = useParams()
  return (
    <Animation>
      {shopId ? (
        <RegisterForm shopId={shopId} />
      ) : (
        <div></div>
        // <FormRegisterAdmin />
      )}
    </Animation>
  )
}
