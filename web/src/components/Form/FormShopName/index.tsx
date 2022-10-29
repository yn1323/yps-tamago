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
export const FormShopName: FC<PropTypes> = ({ disabled }) => {
  const { register } = useFormContext()
  return (
    <FormControl id="shopName" maxW={500}>
      <FormLabel>店舗名</FormLabel>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiHome />
        </InputLeftElement>
        <Input
          disabled={disabled}
          maxW={500}
          data-testid="shopName"
          role="textbox"
          maxLength={64}
          required
          {...register('shopName', {
            required: true,
          })}
        />
      </InputGroup>
    </FormControl>
  )
}
