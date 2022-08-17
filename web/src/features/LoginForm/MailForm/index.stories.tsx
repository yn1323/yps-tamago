import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { MailForm } from '.'

type StoryObj = ComponentStoryObj<typeof MailForm>
type ComponentProps = Required<typeof MailForm.defaultProps>

export default {
  title: 'features/LoginForm/MailForm',
  component: MailForm,
} as ComponentMeta<typeof MailForm>

const args: ComponentProps = {
  mailFormType: 'login',
}

export const Login = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
}
export const Register: StoryObj = {
  args: { ...args, mailFormType: 'signUp' },
  parameters: { chromatic: { viewports: [1080] } },
}
export const PasswordReset: StoryObj = {
  args: { ...args, mailFormType: 'reset' },
  parameters: { chromatic: { viewports: [1080] } },
}
