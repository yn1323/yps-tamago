import { FC } from 'react'

import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

import { useFormContext } from '@redwoodjs/forms'

type PropTypes = {
  defaultChecked?: boolean
}

export const FormTimeCardAuth: FC<PropTypes> = ({ defaultChecked = false }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="useTimeCard" display="flex" maxW={500}>
      <FormLabel>一般ユーザーのタイムカード利用を許可</FormLabel>
      <Switch {...register('useTimeCard')} defaultChecked={defaultChecked} />
    </FormControl>
  )
}
