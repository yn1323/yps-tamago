import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { RegisterForm } from '.'

type StoryObj = ComponentStoryObj<typeof RegisterForm>
type ComponentProps = Required<typeof RegisterForm.defaultProps>

export default {
  title: 'features/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>

const args: ComponentProps = {
  shopId: 'hasShopId',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
}
