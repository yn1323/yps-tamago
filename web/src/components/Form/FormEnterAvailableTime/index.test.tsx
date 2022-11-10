import { waitFor } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Basic, Disabled, Error } = composeStories(stories)

describe('コンポーネント', () => {
  it('コンポーネントを正常に描画', async () => {
    await waitFor(() => {
      expect(() => {
        render(<Basic />)
      }).not.toThrow()
    })
  })
  it('Basic', () => {
    render(<Basic />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes).toHaveLength(2)

    expect(screen.getByLabelText('入力時間(開始)')).toBeInTheDocument()
    expect(screen.getByLabelText('入力時間(終了)')).toBeInTheDocument()
    expect(
      screen.queryByText('終了時間は開始時間より後に設定してください')
    ).not.toBeInTheDocument()
  })

  it('Disabled', async () => {
    render(<Disabled />)
    const textboxes = screen.queryAllByRole('textbox')

    const openTime = textboxes.find(elem => elem.id === 'openTime')
    const closeTime = textboxes.find(elem => elem.id === 'closeTime')
    expect(openTime).toBeDisabled()
    expect(closeTime).toBeDisabled()
    expect(
      screen.queryByText('終了時間は開始時間より後に設定してください')
    ).not.toBeInTheDocument()
  })
})
