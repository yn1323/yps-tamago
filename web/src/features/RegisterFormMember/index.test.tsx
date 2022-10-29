import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'
import { act } from 'react-dom/test-utils'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'
import { CreateMemberRegisterMutationMock } from 'src/hooks/gql/mutation/CreateUser/index.mock'

import * as stories from './index.stories'

const { Basic, OnClick } = composeStories(stories)

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

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeEnabled()
    expect(submitButton).toHaveTextContent('登録する')
  })

  it('Success', async () => {
    await act(async () => {
      CreateMemberRegisterMutationMock.success()
      const { container } = render(<OnClick />)
      await OnClick.play({ canvasElement: container })
    })
  })

  it('Failure', async () => {
    await act(async () => {
      CreateMemberRegisterMutationMock.failure()
      const { container } = render(<OnClick />)
      await OnClick.play({ canvasElement: container })
    })
  })
})
