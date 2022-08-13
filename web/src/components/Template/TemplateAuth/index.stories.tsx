import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { TemplateAuth } from '.'

type StoryObj = ComponentStoryObj<typeof TemplateAuth>
type ComponentProps = Required<typeof TemplateAuth.defaultProps>

export default {
  title: 'components/Template/TemplateAuth',
  component: TemplateAuth,
} as ComponentMeta<typeof TemplateAuth>

const args: ComponentProps = {
  children: <div>content</div>,
}

export const Basic: StoryObj = {
  args: { ...args },
}
