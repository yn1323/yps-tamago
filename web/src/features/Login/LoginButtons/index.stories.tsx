import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { LoginButtons } from '.'

type StoryObj = ComponentStoryObj<typeof LoginButtons>
type ComponentProps = Required<typeof LoginButtons.defaultProps>

export default {
  title: 'features/Login/LoginButtons',
  component: LoginButtons,
} as ComponentMeta<typeof LoginButtons>

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
