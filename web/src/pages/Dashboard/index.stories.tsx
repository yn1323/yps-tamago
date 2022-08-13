import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { Dashboard } from '.'

type StoryObj = ComponentStoryObj<typeof Dashboard>
type ComponentProps = Required<typeof Dashboard.defaultProps>

export default {
  title: 'pages/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

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
