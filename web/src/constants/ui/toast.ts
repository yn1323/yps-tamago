import { UseToastOptions } from '@chakra-ui/react'

export const TOAST_PROPS: UseToastOptions = {
  duration: 3000,
  isClosable: true,
  variant: 'left-accent',
  position: 'top-right',
} as const
