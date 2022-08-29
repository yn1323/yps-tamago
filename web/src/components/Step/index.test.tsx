import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic, Test } = composeStories(stories)

describe('コンポーネント', () => {
  it('コンポーネントを正常に描画', async () => {
    await waitFor(() => {
      expect(() => {
        render(<Basic />)
      }).not.toThrow()
    })
  })
  it('ランドマークロールが存在する', () => {
    render(<Basic />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
  it('tabのロールが存在する', () => {
    render(<Basic />)
    expect(screen.getAllByRole('tab').length).toEqual(3)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })
  it('メニュー表示', () => {
    render(<Basic />)
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
    expect(screen.getByText('Third')).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })
  it('メニュー切り替え確認', async () => {
    const { container } = render(<Test />)
    await Test.play({ canvasElement: container })
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })
})
