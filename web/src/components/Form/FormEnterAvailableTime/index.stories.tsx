/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormEnterAvailableTime } from '.'

type StoryObj = ComponentStoryObj<typeof FormEnterAvailableTime>
type ComponentProps = Required<typeof FormEnterAvailableTime.defaultProps>

export default {
  title: 'components/Form/FormEnterAvailableTime',
  component: FormEnterAvailableTime,
} as ComponentMeta<typeof FormEnterAvailableTime>

const args: ComponentProps = {
  disabled: false,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        <FormEnterAvailableTime {...args} />
      </FormProvider>
    )
  },
}

export const Disabled: StoryObj = {
  args: { ...args, disabled: true },
  parameters: { chromatic: { viewports: [1080] } },
  render: args => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        <FormEnterAvailableTime {...args} />
      </FormProvider>
    )
  },
}
