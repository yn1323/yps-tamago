/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormShopId } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopId>
type ComponentProps = Required<typeof FormShopId.defaultProps>

export default {
  title: 'components/form/FormShopId',
  component: FormShopId,
} as ComponentMeta<typeof FormShopId>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        <FormShopId {...args} />
      </FormProvider>
    )
  },
}
