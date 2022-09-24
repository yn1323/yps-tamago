/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@chakra-ui/react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { FormProvider, useForm } from '@redwoodjs/forms'
// import { userEvent, within, screen } from '@storybook/testing-library'

import { FormTimeCardAuth } from '.'

type StoryObj = ComponentStoryObj<typeof FormTimeCardAuth>
type ComponentProps = Required<typeof FormTimeCardAuth.defaultProps>

export default {
  title: 'components/Form/FormTimeCardAuth',
  component: FormTimeCardAuth,
} as ComponentMeta<typeof FormTimeCardAuth>

const args: ComponentProps = {
  defaultChecked: false,
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
          <FormTimeCardAuth {...args} />
          <Button type="submit">登録する</Button>
        </form>
      </FormProvider>
    )
  },
}
