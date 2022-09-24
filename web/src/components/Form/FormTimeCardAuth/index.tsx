import { FC } from 'react'

import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

import { useFormContext } from '@redwoodjs/forms'

type PropTypes = {
  defaultChecked: boolean
}

export const FormTimeCardAuth: FC<PropTypes> = ({ defaultChecked = false }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="timeCardAuth" display="flex">
      <FormLabel>一般ユーザーもタイムカードを利用できるようにする</FormLabel>
      <Switch {...register('timeCardAuth')} defaultChecked={defaultChecked} />
    </FormControl>
  )
}
