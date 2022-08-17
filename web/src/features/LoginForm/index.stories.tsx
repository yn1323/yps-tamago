import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { LoginForm } from '.'

type StoryObj = ComponentStoryObj<typeof LoginForm>
type ComponentProps = Required<typeof LoginForm.defaultProps>

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    mailFormType: {
      options: ['login', 'reset', 'signUp'] as ComponentProps['mailFormType'][],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof LoginForm>

const args: ComponentProps = {
  mailFormType: 'login',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
