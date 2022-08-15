import { composeStories } from '@storybook/testing-react'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic } = composeStories(stories)

describe('CenterBox', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<Basic />)
    }).not.toThrow()
  })
})
