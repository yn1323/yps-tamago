/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormEmail } from '.'

type StoryObj = ComponentStoryObj<typeof FormEmail>
type ComponentProps = Required<typeof FormEmail.defaultProps>

export default {
  title: 'components/Form/FormEmail',
  component: FormEmail,
} as ComponentMeta<typeof FormEmail>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm<{ email: string }>()
    return (
      <FormProvider {...methods}>
        <FormEmail {...args} />
      </FormProvider>
    )
  },
}
