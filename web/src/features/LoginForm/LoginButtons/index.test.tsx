import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic } = composeStories(stories)

describe('LoginButtons', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<Basic />)
    }).not.toThrow()
  })
  it('ログインボタン表示', () => {
    render(<Basic />)
    expect(screen.getByText('Googleでログイン')).toBeInTheDocument()
    expect(screen.getByText('Twitterでログイン')).toBeInTheDocument()
    expect(screen.getByText('ゲストでログイン')).toBeInTheDocument()
  })
})
