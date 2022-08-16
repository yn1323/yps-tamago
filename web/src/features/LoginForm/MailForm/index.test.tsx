import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Login, Register, PasswordReset } = composeStories(stories)

describe('ログイン', () => {
  it('ランドマークロールが存在する', () => {
    render(<Login />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
  it('input表示', () => {
    render(<Login />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(2)

    const email = textboxes.find(elem => elem.id === 'email')
    const password = textboxes.find(elem => elem.id === 'password')
    expect(email).toHaveAttribute('type', 'email')
    expect(password).toHaveAttribute('type', 'password')
  })
  it('ボタン表示', () => {
    render(<Login />)
    expect(screen.getByText('メールアドレスでログイン')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<Login />)
    expect(screen.getByText('新規登録')).toBeInTheDocument()
    expect(screen.getByText('パスワードを忘れた方')).toBeInTheDocument()
    expect(
      screen.getByText('新規登録').getAttribute('href').split('?')[0]
    ).toEqual('/login/register')
    expect(screen.getByText('パスワードを忘れた方')).toHaveAttribute(
      'href',
      '/login/reset'
    )
  })
})

describe('新規登録', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Register />)
    }).not.toThrow()
  })
  it('input表示', () => {
    render(<Register />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(2)
    const email = textboxes.find(elem => elem.id === 'email')
    const password = textboxes.find(elem => elem.id === 'password')
    expect(email).toHaveAttribute('type', 'email')
    expect(password).toHaveAttribute('type', 'password')
  })
  it('ボタン表示', () => {
    render(<Register />)
    expect(screen.getByText('登録する')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<Register />)

    expect(screen.getByText('パスワードを忘れた方')).toBeInTheDocument()
    expect(screen.getByText('ログイン画面に戻る')).toBeInTheDocument()
    expect(screen.getByText('パスワードを忘れた方')).toHaveAttribute(
      'href',
      '/login/reset'
    )
    expect(screen.getByText('ログイン画面に戻る')).toHaveAttribute(
      'href',
      '/login'
    )
  })
})

describe('パスワードリセット', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordReset />)
    }).not.toThrow()
  })
  it('input表示', () => {
    render(<PasswordReset />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(1)
    expect(textboxes.find(elem => elem.id === 'email').id).toEqual('email')
    const email = textboxes.find(elem => elem.id === 'email')
    expect(email).toHaveAttribute('type', 'email')
  })
  it('ボタン表示', () => {
    render(<PasswordReset />)
    expect(screen.getByText('パスワードリセット')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<PasswordReset />)
    expect(screen.getByText('ログイン画面に戻る')).toBeInTheDocument()
    expect(screen.getByText('ログイン画面に戻る')).toHaveAttribute(
      'href',
      '/login'
    )
  })
})
