/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormUserName } from '.'

type StoryObj = ComponentStoryObj<typeof FormUserName>
type ComponentProps = Required<typeof FormUserName.defaultProps>

export default {
  title: 'components/Form/FormUserName',
  component: FormUserName,
} as ComponentMeta<typeof FormUserName>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        <FormUserName {...args} />
      </FormProvider>
    )
  },
}
