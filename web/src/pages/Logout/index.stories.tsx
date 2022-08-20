import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Logout } from '.'

type StoryObj = ComponentStoryObj<typeof Logout>
type ComponentProps = Required<typeof Logout.defaultProps>

export default {
  title: 'pages/Logout',
  component: Logout,
} as ComponentMeta<typeof Logout>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
