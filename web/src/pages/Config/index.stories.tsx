import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Config } from '.'

type StoryObj = ComponentStoryObj<typeof Config>
type ComponentProps = Required<typeof Config.defaultProps>

export default {
  title: 'pages/Config',
  component: Config,
} as ComponentMeta<typeof Config>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
