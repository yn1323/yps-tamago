import { FC, useMemo } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Box,
  HStack,
  InputLeftElement,
  FormHelperText,
} from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

import { useFormContext } from '@redwoodjs/forms'

// import { isTimeBefore } from 'src/utils/String'

type PropTypes = {
  disabled?: boolean
}
export const FormEnterAvailableTime: FC<PropTypes> = ({ disabled }) => {
  const {
    register,
    formState: { errors },
    // getValues,
  } = useFormContext()

  const openTimeShouldBeforeCloseTime = () => {
    // const isOK = isTimeBefore(getValues().openTime, getValues().closeTime)
    const isOK = true
    return isOK || '終了時間は開始時間より後に設定してください'
  }

  const message = useMemo(() => {
    if (errors.openTime) {
      return errors.openTime.message as string
    } else if (errors.closeTime) {
      return errors.closeTime.message as string
    } else {
      return ''
    }
  }, [errors])

  return (
    <Box w="100%" maxW={500}>
      <HStack alignItems="flex-start">
        <FormControl id="openTime">
          <FormLabel>入力時間(開始)</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <FiClock />
            </InputLeftElement>
            <Input
              type="time"
              disabled={disabled}
              maxW={500}
              data-testid="openTime"
              role="textbox"
              required
              {...register('openTime', {
                validate: { openTimeShouldBeforeCloseTime },
              })}
            />
          </InputGroup>
          <FormHelperText color="crimson">{message}</FormHelperText>
        </FormControl>
        <Box px={4} />

        <FormControl id="closeTime">
          <FormLabel>入力時間(終了)</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <FiClock />
            </InputLeftElement>
            <Input
              type="time"
              disabled={disabled}
              maxW={500}
              data-testid="closeTime"
              role="textbox"
              required
              {...register('closeTime', {
                validate: openTimeShouldBeforeCloseTime,
              })}
            />
          </InputGroup>
        </FormControl>
      </HStack>
    </Box>
  )
}
