import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { render as defaultRender } from '@redwoodjs/testing/web'

import { themeChakra } from 'src/constants/ui/theme'

export const render = (child: JSX.Element) => {
  return defaultRender(
    <>
      <ColorModeScript />
      <ChakraProvider theme={themeChakra}>{child}</ChakraProvider>
    </>
  )
}
