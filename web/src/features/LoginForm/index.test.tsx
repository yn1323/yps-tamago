import { composeStories } from '@storybook/testing-react'

import { render } from '@redwoodjs/testing/web'

import * as stories from './index.stories'

const { Basic } = composeStories(stories)

describe('LoginForm', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<Basic />)
    }).not.toThrow()
  })
})
