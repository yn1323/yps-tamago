import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { LoginButtonShow, LogoutButtonShow } = composeStories(stories)

describe('TemplateUnauth > ログインボタン表示', () => {
  it('コンポーネントを正常に描画', async () => {
    await waitFor(() => {
      expect(() => {
        render(<LoginButtonShow />)
      }).not.toThrow()
    })
  })
  it('ランドマークロールが存在する', async () => {
    await waitFor(() => {
      render(<LoginButtonShow />)

      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
    })
  })
  it('ログインボタンを表示', async () => {
    await waitFor(() => {
      render(<LoginButtonShow />)
      expect(screen.getByText('ログイン')).toBeInTheDocument()
    })
  })
})

describe('TemplateUnauth > ログアウトボタン表示', () => {
  it('コンポーネントを正常に描画', async () => {
    await waitFor(() => {
      expect(() => {
        render(<LogoutButtonShow />)
      }).not.toThrow()
    })
  })

  it('ログアウトボタンを表示', async () => {
    await waitFor(() => {
      render(<LogoutButtonShow />)
      expect(screen.getByText('ログアウト')).toBeInTheDocument()
    })
  })
})

describe('TemplateUnauth > props指定異常', () => {
  it('コンポーネントが描画されない', async () => {
    await waitFor(() => {
      expect(() => {
        render(<LoginButtonShow showLoginButton showLogoutButton />)
      }).not.toThrow()
    })
  })
})
