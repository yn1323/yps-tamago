/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { FormPassword } from '.'

type StoryObj = ComponentStoryObj<typeof FormPassword>
type ComponentProps = Required<typeof FormPassword.defaultProps>

export default {
  title: 'components/Form/FormPassword',
  component: FormPassword,
} as ComponentMeta<typeof FormPassword>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}
export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm<{ email: string }>()
    return (
      <FormProvider {...methods}>
        <FormPassword {...args} />
      </FormProvider>
    )
  },
}
