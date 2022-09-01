import { FC } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'

import { useFormContext } from '@redwoodjs/forms'

export const FormEmail: FC = () => {
  const { register } = useFormContext()
  return (
    <FormControl id="email">
      <FormLabel aria-hidden>メールアドレス</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiMail />
        </InputLeftElement>
        <Input
          data-testid="email"
          role="textbox"
          type="email"
          maxLength={64}
          required
          {...register('email', {
            required: true,
          })}
        />
      </InputGroup>
    </FormControl>
  )
}
