import { FC } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'

import { useFormContext } from '@redwoodjs/forms'

type PropTypes = {
  disabled?: boolean
}
export const FormUserName: FC<PropTypes> = ({ disabled }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="userName" maxW={500}>
      <FormLabel>ユーザー名</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiUser />
        </InputLeftElement>
        <Input
          disabled={disabled}
          maxW={500}
          data-testid="userName"
          role="textbox"
          maxLength={64}
          required
          {...register('userName', {
            required: true,
          })}
        />
      </InputGroup>
    </FormControl>
  )
}
