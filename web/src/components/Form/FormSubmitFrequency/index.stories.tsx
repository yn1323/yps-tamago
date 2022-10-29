/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@chakra-ui/react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'

import { SUBMIT_FREQUENCY } from 'src/constants/ui/submitFrequency'

import { FormSubmitFrequency } from '.'

type StoryObj = ComponentStoryObj<typeof FormSubmitFrequency>
type ComponentProps = Required<typeof FormSubmitFrequency.defaultProps>

export default {
  title: 'components/Form/FormSubmitFrequency',
  component: FormSubmitFrequency,
  argTypes: {
    defaultValue: {
      options: SUBMIT_FREQUENCY.map(({ value }) => value),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof FormSubmitFrequency>

const args: ComponentProps = {
  defaultValue: '',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: args => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(formData => console.log(formData))}
        >
          <FormSubmitFrequency {...args} />
          <Button type="submit">登録する</Button>
        </form>
      </FormProvider>
    )
  },
}
