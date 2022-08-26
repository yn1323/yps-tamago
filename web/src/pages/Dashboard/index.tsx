import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'

type PropTypes = {}

export const Dashboard: FC<PropTypes> = () => {
  const a = useAuth()

  const b = async () => {
    console.log(a)
    console.log(await a.hasRole)
    console.log(await a.hasRole('new'))
    console.log(await a.hasRole('Mog'))
  }

  b()

  return <Box data-testid="dashboard"></Box>
}
