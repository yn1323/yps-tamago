import { FC } from 'react'

import { VStack } from '@chakra-ui/react'

import { useScreenSize } from 'src/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const CenterBox: FC<PropTypes> = ({ children }) => {
  const { isPC } = useScreenSize()
  return (
    <VStack h="calc(100vh - 100px)" justifyContent="center">
      {isPC ? (
        <VStack
          shadow="md"
          border="1px"
          borderColor="gray.200"
          borderRadius="20px"
          py={12}
          px={4}
          w="400px"
        >
          {children}
        </VStack>
      ) : (
        children
      )}
    </VStack>
  )
}
