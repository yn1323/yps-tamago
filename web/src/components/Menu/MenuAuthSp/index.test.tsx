import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { MenuShow, MenuHidden } = composeStories(stories)

describe('AuthMenuPc > ダイアログ非表示', () => {
  it('ランドマークロールが存在する', () => {
    render(<MenuHidden />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
  it('ボタンが存在する', () => {
    render(<MenuShow />)
    expect(screen.getByLabelText('マイページ')).toBeInTheDocument()
    expect(screen.getByLabelText('シフト')).toBeInTheDocument()
    expect(screen.getByLabelText('勤務記録')).toBeInTheDocument()
    expect(screen.getByLabelText('打刻')).toBeInTheDocument()
    expect(screen.getByLabelText('メニューを開く')).toBeInTheDocument()
  })
  it(`ボタンが存在しない`, () => {
    expect(screen.queryByLabelText('設定')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('使い方')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('ログアウト')).not.toBeInTheDocument()
  })
  it('リンクが正しい', () => {
    render(<MenuShow />)
    expect(screen.getByLabelText('マイページ')).toHaveAttribute(
      'href',
      '/mypage'
    )
    expect(screen.getByLabelText('シフト')).toHaveAttribute('href', '/shift')
    expect(screen.getByLabelText('勤務記録')).toHaveAttribute(
      'href',
      '/history'
    )
    expect(screen.getByLabelText('打刻')).toHaveAttribute('href', '/timecard')
  })
})

describe('AuthMenuSp > ダイアログ表示', () => {
  it('ボタンが存在する', async () => {
    const { container } = render(<MenuShow />)
    await MenuShow.play({ canvasElement: container })
    expect(screen.getByText('設定')).toBeInTheDocument()
    expect(screen.getByText('使い方')).toBeInTheDocument()
    expect(screen.getByText('ログアウト')).toBeInTheDocument()
  })
  it('リンクが正しい', async () => {
    const { container } = render(<MenuShow />)
    await MenuShow.play({ canvasElement: container })
    expect(screen.getByText('設定')).toHaveAttribute('href', '/config')
    expect(screen.getByText('使い方')).toHaveAttribute('href', '/help')
    expect(screen.getByText('ログアウト')).toHaveAttribute('href', '/logout')
  })
})
