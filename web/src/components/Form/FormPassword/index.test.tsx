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

    const password = textboxes.find(elem => elem.id === 'password')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toHaveAttribute('maxLength', '16')
    expect(password).toBeEnabled()
    expect(password).toHaveAttribute('aria-describedby', 'password-helptext')
    expect(
      screen.getByText('8文字以上16文字以内で入力してください')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('パスワード')).toBeInTheDocument()
  })
})
