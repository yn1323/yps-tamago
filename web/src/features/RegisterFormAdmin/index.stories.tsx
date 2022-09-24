/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { RegisterFormAdmin } from '.'

type StoryObj = ComponentStoryObj<typeof RegisterFormAdmin>
type ComponentProps = Required<typeof RegisterFormAdmin.defaultProps>

export default {
  title: 'features/RegisterFormAdmin',
  component: RegisterFormAdmin,
} as ComponentMeta<typeof RegisterFormAdmin>

const args: ComponentProps = {
  userName: 'userName',
  shopName: 'shopName',
  startTime: '12:30',
  endTime: '15:50',
  submitFrequency: '2w',
  timeCardAuth: false,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
