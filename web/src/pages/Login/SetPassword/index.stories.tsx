import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { SetPassword } from '.'

type StoryObj = ComponentStoryObj<typeof SetPassword>
type ComponentProps = Required<typeof SetPassword.defaultProps>

export default {
  title: 'pages/Login/SetPassword',
  component: SetPassword,
} as ComponentMeta<typeof SetPassword>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('close'))
    await screen.findByText('マイページ')
  },
}
