import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { LoginReset } from '.'

type StoryObj = ComponentStoryObj<typeof LoginReset>
type ComponentProps = Required<typeof LoginReset.defaultProps>

export default {
  title: 'pages/Login/LoginReset',
  component: LoginReset,
} as ComponentMeta<typeof LoginReset>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
