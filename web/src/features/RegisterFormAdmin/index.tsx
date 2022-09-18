import { FC } from 'react'

import { Button, VStack } from '@chakra-ui/react'

import { FormProvider } from '@redwoodjs/forms'

import { FormShopName } from 'src/components/Form/FormShopName'
import { FormUserName } from 'src/components/Form/FormUserName'
import { useRegisterFormAdmin } from 'src/features/RegisterFormAdmin/script'

type PropTypes = {
  userName?: string
}

export const RegisterFormAdmin: FC<PropTypes> = ({ userName = '' }) => {
  const { methods, isLoading, register } = useRegisterFormAdmin({
    userName,
  })
  return (
    <FormProvider {...methods}>
      <VStack
        as="form"
        onSubmit={methods.handleSubmit(formData => {})}
        spacing={4}
        alignItems="center"
        justifyContent={'center'}
      >
        <FormUserName disabled={false} />
        <FormShopName disabled={false} />
        <Button colorScheme="primary" isLoading={false}>
          登録する
        </Button>
      </VStack>
    </FormProvider>
  )
}
