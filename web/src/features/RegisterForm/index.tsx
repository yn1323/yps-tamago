import { FC } from 'react'

import { Button, VStack } from '@chakra-ui/react'

import { FormProvider } from '@redwoodjs/forms'
import { routes } from '@redwoodjs/router'

import { FormShopId } from 'src/components/Form/FormShopId'
import { FormUserName } from 'src/components/Form/FormUserName'
import { useRegisterForm } from 'src/features/RegisterForm/script'

type PropTypes = {
  shopId: string
  userName?: string
}

export const RegisterForm: FC<PropTypes> = ({ shopId, userName = '' }) => {
  const { methods, isLoading, register } = useRegisterForm({ shopId, userName })

  return (
    <FormProvider {...methods}>
      <VStack
        as="form"
        onSubmit={methods.handleSubmit(formData => register(formData))}
        spacing={4}
        alignItems="center"
        justifyContent={'center'}
      >
        <FormShopId disabled={isLoading} />
        <FormUserName disabled={isLoading} />
        <Button type="submit" colorScheme="primary" isLoading={isLoading}>
          登録する
        </Button>
      </VStack>
    </FormProvider>
  )
}
