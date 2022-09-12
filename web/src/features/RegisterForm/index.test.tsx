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
    expect(screen.getByLabelText('店舗ID')).toBeInTheDocument()
    expect(screen.getByLabelText('ユーザー名')).toBeInTheDocument()

    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(2)

    const shopId = textboxes.find(elem => elem.id === 'shopId')
    expect(shopId).toHaveValue('hasShopId')
    const userName = textboxes.find(elem => elem.id === 'userName')
    expect(userName).toHaveValue('someUserName')
  })
})
