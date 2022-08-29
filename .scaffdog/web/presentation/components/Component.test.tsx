import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

// import { screen } from '@redwoodjs/testing/web'

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
  // it('ランドマークロールが存在する', () => {
  //   render(<Basic />)
  //   expect(screen.getByRole('navigation')).toBeInTheDocument()
  // })
  // it('ボタンが存在する', () => {
  //   render(<Basic />)
  //   expect(screen.getByText('マイページ')).toBeInTheDocument()
  // })
  // it('メニューが閉じているときにボタンのラベルが非表示', async () => {
  //   const { container } = render(<LabelHidden />)
  //   await LabelHidden.play({ canvasElement: container })
  // })
})
