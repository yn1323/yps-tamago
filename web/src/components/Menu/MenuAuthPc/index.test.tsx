import { composeStories } from '@storybook/testing-react'

import { render, screen } from '@redwoodjs/testing/web'

import * as stories from './index.stories'

const { LabelShow, LabelHidden } = composeStories(stories)

describe('AuthMenuPc > ラベル表示', () => {
  it('ランドマークロールが存在する', () => {
    render(<LabelShow />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
  it('ボタンが存在する', () => {
    render(<LabelShow />)
    expect(screen.getByText('マイページ')).toBeInTheDocument()
    expect(screen.getByText('シフト')).toBeInTheDocument()
    expect(screen.getByText('勤務記録')).toBeInTheDocument()
    expect(screen.getByText('タイムカード')).toBeInTheDocument()
    expect(screen.getByText('設定')).toBeInTheDocument()
    expect(screen.getByText('使い方')).toBeInTheDocument()
    expect(screen.getByText('ログアウト')).toBeInTheDocument()
  })
  it('リンクが正しい', () => {
    render(<LabelShow />)
    expect(screen.getByText('マイページ')).toHaveAttribute('href', '/mypage')
    expect(screen.getByText('シフト')).toHaveAttribute('href', '/shift')
    expect(screen.getByText('勤務記録')).toHaveAttribute('href', '/history')
    expect(screen.getByText('タイムカード')).toHaveAttribute(
      'href',
      '/timecard'
    )
    expect(screen.getByText('設定')).toHaveAttribute('href', '/config')
    expect(screen.getByText('使い方')).toHaveAttribute('href', '/help')
    expect(screen.getByText('ログアウト')).toHaveAttribute('href', '/logout')
  })
})

describe('AuthMenuPc > ラベル非表示', () => {
  it('メニューが閉じているときにボタンのラベルが非表示', async () => {
    const { container } = render(<LabelHidden />)
    await LabelHidden.play({ canvasElement: container })

    expect(screen.queryByText('マイページ')).not.toBeInTheDocument()
    expect(screen.queryByText('シフト')).not.toBeInTheDocument()
    expect(screen.queryByText('勤務記録')).not.toBeInTheDocument()
    expect(screen.queryByText('タイムカード')).not.toBeInTheDocument()
    expect(screen.queryByText('設定')).not.toBeInTheDocument()
    expect(screen.queryByText('使い方')).not.toBeInTheDocument()
    expect(screen.queryByText('ログアウト')).not.toBeInTheDocument()

    expect(screen.getByLabelText('マイページ')).toBeInTheDocument()
    expect(screen.getByLabelText('シフト')).toBeInTheDocument()
    expect(screen.getByLabelText('勤務記録')).toBeInTheDocument()
    expect(screen.getByLabelText('タイムカード')).toBeInTheDocument()
    expect(screen.getByLabelText('設定')).toBeInTheDocument()
    expect(screen.getByLabelText('使い方')).toBeInTheDocument()
    expect(screen.getByLabelText('ログアウト')).toBeInTheDocument()
  })
})

describe('AuthMenuPc > メニュー開閉', () => {
  it('メニューが開いているときの開閉ボタン表示', () => {
    render(<LabelShow />)
    expect(
      screen.getByLabelText('ナビゲーションのラベルを非表示')
    ).toBeInTheDocument()
    expect(
      screen.queryByLabelText('ナビゲーションのラベルを表示')
    ).not.toBeInTheDocument()
  })

  it('メニューが閉じているときの開閉ボタン表示', async () => {
    const { container } = render(<LabelHidden />)
    await LabelHidden.play({ canvasElement: container })
    expect(
      screen.queryByLabelText('ナビゲーションのラベルを非表示')
    ).not.toBeInTheDocument()
    expect(
      screen.getByLabelText('ナビゲーションのラベルを表示')
    ).toBeInTheDocument()
  })
})
