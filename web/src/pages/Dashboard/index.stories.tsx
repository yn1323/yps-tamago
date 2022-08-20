import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

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
