import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { LoginRegister } from '.'

type StoryObj = ComponentStoryObj<typeof LoginRegister>
type ComponentProps = Required<typeof LoginRegister.defaultProps>

export default {
  title: 'pages/Login/LoginRegister',
  component: LoginRegister,
} as ComponentMeta<typeof LoginRegister>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
