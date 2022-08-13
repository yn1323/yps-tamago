import { FC } from 'react'

import { Box } from '@chakra-ui/react'

type PropTypes = {}

export const {{ inputs.component | pascal }}: FC<PropTypes> = ({}) => {
  return <Box data-testid="{{inputs.component | lower}}"></Box>
}
