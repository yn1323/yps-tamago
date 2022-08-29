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
  it('ボタン', () => {
    render(<Basic />)
    const nextButtons = screen.getAllByText('次へ')
    const backButtons = screen.getAllByText('戻る')
    const submitButtons = screen.getByText('登録する')
    expect(nextButtons).toHaveLength(2)
    expect(backButtons).toHaveLength(3)
    expect(submitButtons).toBeInTheDocument()
  })
})
