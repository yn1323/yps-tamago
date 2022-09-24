import { FC } from 'react'

import { Box, Button, Divider, Spacer, VStack } from '@chakra-ui/react'

import { FormProvider } from '@redwoodjs/forms'

import { FormEnterAvailableTime } from 'src/components/Form/FormEnterAvailableTime'
import { FormShopName } from 'src/components/Form/FormShopName'
import { FormSubmitFrequency } from 'src/components/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from 'src/components/Form/FormTimeCardAuth'
import { FormUserName } from 'src/components/Form/FormUserName'
import { useRegisterFormAdmin } from 'src/features/RegisterFormAdmin/script'

type PropTypes = {
  userName?: string
  shopName?: string
  startTime?: string
  endTime?: string
  submitFrequency?: string
  timeCardAuth?: boolean
}

export const RegisterFormAdmin: FC<PropTypes> = ({
  userName = '',
  shopName = '',
  startTime = '12:00',
  endTime = '16:30',
  submitFrequency = '2w',
  timeCardAuth = false,
}) => {
  const { methods, isLoading, register } = useRegisterFormAdmin({
    userName,
    shopName,
    startTime,
    endTime,
    submitFrequency,
    timeCardAuth,
  })
  return (
    <FormProvider {...methods}>
      <VStack
        as="form"
        onSubmit={methods.handleSubmit(formData => console.log(formData))}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <FormUserName />
        <FormShopName />
        <FormEnterAvailableTime />
        <FormSubmitFrequency />
        <Spacer />
        <Divider maxW={500} />
        <FormTimeCardAuth />
        <Box>
          <Button type="submit" colorScheme="primary" isLoading={false}>
            登録する
          </Button>
        </Box>
      </VStack>
    </FormProvider>
  )
}
