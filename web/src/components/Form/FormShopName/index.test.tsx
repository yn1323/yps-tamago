import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic, Disabled } = composeStories(stories)

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

    const shopName = textboxes.find(elem => elem.id === 'shopName')
    expect(shopName).toHaveAttribute('maxLength', '64')
    expect(screen.getByLabelText('店舗名')).toBeInTheDocument()
  })

  it('input > disabled', () => {
    render(<Disabled />)
    const textboxes = screen.queryAllByRole('textbox')

    const shopName = textboxes.find(elem => elem.id === 'shopName')
    expect(shopName).toBeDisabled()
  })
})
