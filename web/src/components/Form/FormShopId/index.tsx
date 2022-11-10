import { FC } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiCoffee } from 'react-icons/fi'

import { useFormContext } from '@redwoodjs/forms'

type PropTypes = {
  disabled?: boolean
}

export const FormShopId: FC<PropTypes> = ({ disabled = false }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="shopId" maxW={500}>
      <FormLabel>店舗ID</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiCoffee />
        </InputLeftElement>
        <Input
          disabled={disabled}
          data-testid="shopId"
          role="textbox"
          maxLength={64}
          required
          {...register('shopId', {
            required: true,
          })}
        />
      </InputGroup>
    </FormControl>
  )
}
