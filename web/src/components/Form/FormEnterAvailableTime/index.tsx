import { FC } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'

import { useFormContext } from '@redwoodjs/forms'

type PropTypes = {
  disabled?: boolean
}
export const FormEnterAvailableTime: FC<PropTypes> = ({ disabled }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="enterAvailableTime" maxW={500}>
      <FormLabel>シフト入力可能時間</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiHome />
        </InputLeftElement>
        <Input
          disabled={disabled}
          maxW={500}
          data-testid="enterAvailableTime"
          role="textbox"
          maxLength={64}
          required
          {...register('enterAvailableTime', {
            required: true,
          })}
        />
      </InputGroup>
    </FormControl>
  )
}
