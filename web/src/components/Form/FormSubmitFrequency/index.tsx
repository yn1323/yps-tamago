import { FC } from 'react'

import { FormControl, FormLabel, Select } from '@chakra-ui/react'

import { useFormContext } from '@redwoodjs/forms'

import { SUBMIT_FREQUENCY } from 'src/constants/ui/submitFrequency'

type PropTypes = {
  defaultValue?: string
}

export const FormSubmitFrequency: FC<PropTypes> = ({
  defaultValue = SUBMIT_FREQUENCY[0].value,
}) => {
  const { register } = useFormContext()

  return (
    <FormControl id="submitFrequency" maxW={500}>
      <FormLabel>シフト提出頻度</FormLabel>
      <Select defaultValue={defaultValue} {...register('submitFrequency')}>
        {SUBMIT_FREQUENCY.map(({ label, value }, i) => (
          <option value={value} key={i}>
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
