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

export const FormShopId: FC = () => {
  const { register } = useFormContext()
  return (
    <FormControl id="shopId">
      <FormLabel>店舗ID</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiCoffee />
        </InputLeftElement>
        <Input
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
