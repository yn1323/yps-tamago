import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { FormLogin } from '.'

type StoryObj = ComponentStoryObj<typeof FormLogin>
type ComponentProps = Required<typeof FormLogin.defaultProps>

export default {
  title: 'features/Login',
  component: FormLogin,
} as ComponentMeta<typeof FormLogin>

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
    await userEvent.click(canvas.getByTestId('close'))
    await screen.findByText('マイページ')
  },
}
