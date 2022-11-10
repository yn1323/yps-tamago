import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { RegisterFormMember } from '.'

type StoryObj = ComponentStoryObj<typeof RegisterFormMember>
type ComponentProps = Required<typeof RegisterFormMember.defaultProps>

export default {
  title: 'features/RegisterFormMember',
  component: RegisterFormMember,
} as ComponentMeta<typeof RegisterFormMember>

const args: ComponentProps = {
  shopId: 'hasShopId',
  userName: 'someUserName',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
export const OnClick: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText('登録する'))
  },
}
