import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { TemplateUnauth } from '.'

type StoryObj = ComponentStoryObj<typeof TemplateUnauth>
type ComponentProps = Required<typeof TemplateUnauth.defaultProps>

export default {
  title: 'components/Template/TemplateUnauth',
  component: TemplateUnauth,
} as ComponentMeta<typeof TemplateUnauth>

const args: ComponentProps = {
  children: <div>hoge</div>,
  showLoginButton: true,
  showLogoutButton: false,
}

console.log('AAAAA')

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // await userEvent.click(canvas.getByTestId('close'))
    // await screen.findByText('マイページ')
  },
}
