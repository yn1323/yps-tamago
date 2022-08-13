import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { AuthTemplate } from '.'

type StoryObj = ComponentStoryObj<typeof AuthTemplate>
type ComponentProps = Required<typeof AuthTemplate.defaultProps>

export default {
  title: 'components/Template/AuthTemplate',
  component: AuthTemplate,
} as ComponentMeta<typeof AuthTemplate>

const args: ComponentProps = {
  children: <div>content</div>,
}

export const Basic: StoryObj = {
  args: { ...args },
}
