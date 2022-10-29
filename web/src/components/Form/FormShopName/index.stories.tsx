/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormShopName } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopName>
type ComponentProps = Required<typeof FormShopName.defaultProps>

export default {
  title: 'components/Form/FormShopName',
  component: FormShopName,
} as ComponentMeta<typeof FormShopName>

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
        <FormShopName {...args} />
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
        <FormShopName {...args} />
      </FormProvider>
    )
  },
}
