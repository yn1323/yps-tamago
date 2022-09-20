import { FC } from 'react'

import { FormControl, FormLabel, Select } from '@chakra-ui/react'

import { SUBMIT_FREQUENCY } from 'src/constants/ui/submitFrequency'

type PropTypes = {
  defaultValue: string
}

export const FormSubmitFrequency: FC<PropTypes> = ({ defaultValue }) => {
  return (
    <FormControl id="submitFrequency" maxW={500}>
      <FormLabel>シフト提出頻度</FormLabel>
      <Select defaultValue={defaultValue}>
        {SUBMIT_FREQUENCY.map(({ label, value }, i) => (
          <option value={value} key={i}>
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
