import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic } = composeStories(stories)

describe('コンポーネント', () => {
  it('コンポーネントを正常に描画', async () => {
    await waitFor(() => {
      expect(() => {
        render(<Basic />)
      }).not.toThrow()
    })
  })
  it('input', () => {
    render(<Basic />)
    const textboxes = screen.queryAllByRole('textbox')

    const email = textboxes.find(elem => elem.id === 'email')
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveAttribute('maxLength', '64')
    expect(screen.getByLabelText('メールアドレス')).toBeInTheDocument()
  })
})
