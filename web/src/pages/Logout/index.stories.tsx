import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { Logout } from '.'

type StoryObj = ComponentStoryObj<typeof Logout>
type ComponentProps = Required<typeof Logout.defaultProps>

export default {
  title: 'pages/Logout',
  component: Logout,
} as ComponentMeta<typeof Logout>

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
  },
}
