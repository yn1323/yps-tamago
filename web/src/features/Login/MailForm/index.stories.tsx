import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { MailForm } from '.'

type StoryObj = ComponentStoryObj<typeof MailForm>
type ComponentProps = Required<typeof MailForm.defaultProps>

export default {
  title: 'features/Login/MailForm',
  component: MailForm,
} as ComponentMeta<typeof MailForm>

const args: ComponentProps = {
  mailFormType: 'login',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('close'))
    await screen.findByText('マイページ')
  },
}
