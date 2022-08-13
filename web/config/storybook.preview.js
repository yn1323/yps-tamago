import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { themeChakra } from '../src/utils/ui/theme'

export const parameters = {
  options: {
    storySort: {
      order: [''],
    },
  },
  layout: 'fullscreen',
  chakra: {
    theme: themeChakra,
  },
}

const withChakra = StoryFn => {
  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
