import { FC } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormEmail } from 'src/components/Form/FormEmail'
import { FormShopId } from 'src/components/Form/FormShopId'
import { FormUserName } from 'src/components/Form/FormUserName'

type PropTypes = {
  shopId: string
}

type FormValues = {
  shopId: string
  email: string
  userName: string
}

export const RegisterForm: FC<PropTypes> = ({ shopId }) => {
  const { userMetadata } = useAuth()
  const userName = userMetadata?.user_metadata.ful_name
  const email = userMetadata?.user_metadata.email
  const methods = useForm<FormValues>({
    defaultValues: { shopId, email, userName },
  })
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(aa => console.log(aa))}>
        <FormShopId />
        <FormEmail />
        <FormUserName />
      </form>
    </FormProvider>
  )
}
