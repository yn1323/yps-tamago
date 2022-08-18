import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { Register } from '.'

type StoryObj = ComponentStoryObj<typeof Register>
type ComponentProps = Required<typeof Register.defaultProps>

export default {
  title: 'pages/Register',
  component: Register,
} as ComponentMeta<typeof Register>

const args: ComponentProps = {}

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
