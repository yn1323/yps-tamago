import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import MenuAuthSp from './MenuAuthSp'

type StoryObj = ComponentStoryObj<typeof MenuAuthSp>
type ComponentProps = Required<typeof MenuAuthSp.defaultProps>

export default {
  title: 'components/Menu/MenuAuthSp',
  component: MenuAuthSp,
} as ComponentMeta<typeof MenuAuthSp>

const args: ComponentProps = {
  children: <div>main content</div>,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await screen.findByText('マイページ')
    await screen.findByText('シフト')
    await screen.findByText('勤務記録')
    await screen.findByText('打刻')
    await userEvent.click(canvas.getByTestId('ellipsis'))
    await screen.findByText('設定')
    await screen.findByText('使い方')
    await screen.findByText('ログアウト')
  },
}
