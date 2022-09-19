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

import { isTimeBefore } from 'src/utils/String'

type PropTypes = {
  disabled?: boolean
}
export const FormEnterAvailableTime: FC<PropTypes> = ({ disabled }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext()

  const startTimeShouldBeforeEndTime = () => {
    const isOK = isTimeBefore(getValues().startTime, getValues().endTime)
    return isOK || '終了時間は開始時間より後に設定してください'
  }

  const message = useMemo(() => {
    if (errors.startTime) {
      return errors.startTime.message as string
    } else if (errors.endTime) {
      return errors.endTime.message as string
    } else {
      return ''
    }
  }, [errors])

  return (
    <>
      <HStack alignItems="flex-start">
        <FormControl id="startTime">
          <FormLabel>入力時間(開始)</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <FiClock />
            </InputLeftElement>
            <Input
              type="time"
              disabled={disabled}
              maxW={500}
              data-testid="startTime"
              role="textbox"
              required
              {...register('startTime', {
                validate: { startTimeShouldBeforeEndTime },
              })}
            />
          </InputGroup>
          <FormHelperText color="crimson">{message}</FormHelperText>
        </FormControl>
        <Box px={4} />

        <FormControl id="endTime">
          <FormLabel>入力時間(終了)</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <FiClock />
            </InputLeftElement>
            <Input
              type="time"
              disabled={disabled}
              maxW={500}
              data-testid="endTime"
              role="textbox"
              required
              {...register('endTime', {
                validate: startTimeShouldBeforeEndTime,
              })}
            />
          </InputGroup>
        </FormControl>
      </HStack>
    </>
  )
}
