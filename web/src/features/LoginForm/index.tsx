import { FC } from 'react'

import { Box, Divider, HStack, VStack } from '@chakra-ui/react'

import { LoginButtons } from 'src/features/LoginForm/LoginButtons'
import { MailForm } from 'src/features/LoginForm/MailForm'

type PropTypes = {
  mailFormType: typeof MailForm.defaultProps.mailFormType
}

export const LoginForm: FC<PropTypes> = ({ mailFormType }) => {
  return (
    <VStack w="360px" spacing={4} role="form">
      <LoginButtons />
      <HStack h={10} w="100%" spacing={4}>
        <Divider />
        <Box>or</Box>
        <Divider />
      </HStack>
      <MailForm mailFormType={mailFormType} />
    </VStack>
  )
}
