import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { CenterBox } from '.'

type StoryObj = ComponentStoryObj<typeof CenterBox>
type ComponentProps = Required<typeof CenterBox.defaultProps>

export default {
  title: 'components/Template/CenterBox',
  component: CenterBox,
} as ComponentMeta<typeof CenterBox>

const args: ComponentProps = {
  children: <div>Child Component</div>,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
