import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import UpdateFormMemberCell from 'src/features/UpdateFormMemberCell'

export const Dashboard: FC = () => {
  return (
    <Box data-testid="dashboard">
      <UpdateFormMemberCell userId="05ed64bd-5ce5-42c8-ba1c-8b357da0ce10" />
    </Box>
  )
}
