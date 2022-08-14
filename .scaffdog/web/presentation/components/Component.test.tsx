import { composeStories } from '@storybook/testing-react'

import { render, screen } from '@redwoodjs/testing/web'

import * as stories from './index.stories'

const { Basic } = composeStories(stories)

describe('{{ inputs.component | pascal }}', () => {
  it('コンポーネントが描画される', () => {
    expect(() => {
      render(<Basic />)
    }).not.toThrow()
  })
  it('ランドマークロールが存在する', () => {
    render(<Basic />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  it('ボタンが存在する', () => {
    render(<Basic />)
    expect(screen.getByText('マイページ')).toBeInTheDocument()
  })
  // it('メニューが閉じているときにボタンのラベルが非表示', async () => {
  //   const { container } = render(<LabelHidden />)
  //   await LabelHidden.play({ canvasElement: container })
  // })
})
