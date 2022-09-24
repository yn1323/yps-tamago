/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { SUBMIT_FREQUENCY } from 'src/constants/ui/submitFrequency'

import { RegisterFormAdmin } from '.'

type StoryObj = ComponentStoryObj<typeof RegisterFormAdmin>
type ComponentProps = Required<typeof RegisterFormAdmin.defaultProps>

export default {
  title: 'features/RegisterFormAdmin',
  component: RegisterFormAdmin,
  argTypes: {
    submitFrequency: {
      options: SUBMIT_FREQUENCY.map(({ value }) => value),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof RegisterFormAdmin>

const args: ComponentProps = {
  userName: 'userName',
  shopName: 'shopName',
  startTime: '12:30',
  endTime: '15:50',
  submitFrequency: SUBMIT_FREQUENCY[2].value,
  timeCardAuth: false,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
