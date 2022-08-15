import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { LoginForm } from '.'

type StoryObj = ComponentStoryObj<typeof LoginForm>
type ComponentProps = Required<typeof LoginForm.defaultProps>

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    mailFormType: {
      options: [
        'LoginForm',
        'reset',
        'signUp',
      ] as ComponentProps['mailFormType'][],
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

export const Test: StoryObj = {
  args: { ...args },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   await userEvent.click(canvas.getByTestId('close'))
  //   await screen.findByText('マイページ')
  // },
}
