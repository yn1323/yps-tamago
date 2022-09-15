import { UseToastOptions } from '@chakra-ui/react'

export const TOAST_PROPS: UseToastOptions = {
  duration: 5000,
  isClosable: true,
  variant: 'left-accent',
  position: 'top-right',
} as const
