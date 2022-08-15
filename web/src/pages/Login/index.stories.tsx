import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { Login } from '.'

type StoryObj = ComponentStoryObj<typeof Login>
type ComponentProps = Required<typeof Login.defaultProps>

export default {
  title: 'pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>

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
