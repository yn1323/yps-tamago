import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { useParams } from '@redwoodjs/router'

import { Animation } from 'src/components/Template/Animation'

export const New: FC = () => {
  const { shopId } = useParams()
  const isUserExist = false
  return (
    <Animation>
      {/* {!shopId ? (
        <FormRegisterAdmin />
      ) : !isUserExist ? (
        <FormRegisterUser shopInfo={shopInfo} />
      ) : (
        <FormRegisterAddShop shopInfo={shopInfo} userInfo={userInfo} />
      )} */}
    </Animation>
  )
}
