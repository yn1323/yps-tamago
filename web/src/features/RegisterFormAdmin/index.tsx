import { FC } from 'react'

import { Button, Spacer, VStack } from '@chakra-ui/react'

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
  openTime?: string
  closeTime?: string
  submitFrequency?: string
  useTimeCard?: boolean
}

export const RegisterFormAdmin: FC<PropTypes> = ({
  userName = '',
  shopName = '',
  openTime = '12:00',
  closeTime = '16:30',
  submitFrequency = '2w',
  useTimeCard = false,
}) => {
  const { methods, isLoading, register } = useRegisterFormAdmin({
    userName,
    shopName,
    openTime,
    closeTime,
    submitFrequency,
    useTimeCard,
  })
  return (
    <FormProvider {...methods}>
      <VStack
        as="form"
        onSubmit={methods.handleSubmit(formData => register(formData))}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <FormUserName />
        <FormShopName />
        <FormEnterAvailableTime />
        <FormSubmitFrequency />
        <Spacer />
        <FormTimeCardAuth />
        <Button type="submit" colorScheme="primary" isLoading={isLoading}>
          登録する
        </Button>
      </VStack>
    </FormProvider>
  )
}
