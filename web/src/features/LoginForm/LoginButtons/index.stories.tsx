import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { LoginButtons } from '.'

type StoryObj = ComponentStoryObj<typeof LoginButtons>
type ComponentProps = Required<typeof LoginButtons.defaultProps>

export default {
  title: 'features/LoginForm/LoginButtons',
  component: LoginButtons,
} as ComponentMeta<typeof LoginButtons>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
}
