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

export const FormUserName: FC = () => {
  const { register } = useFormContext()
  return (
    <FormControl id="userName">
      <FormLabel>ユーザー名</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiUser />
        </InputLeftElement>
        <Input
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
