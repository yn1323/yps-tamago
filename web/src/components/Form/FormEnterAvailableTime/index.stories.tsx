/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@chakra-ui/react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

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
        <form
          onSubmit={methods.handleSubmit(formData => console.log(formData))}
        >
          <FormEnterAvailableTime {...args} />
          <Button type="submit">登録</Button>
        </form>
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

export const Error: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render: () => {
    const methods = useForm()

    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(formData => console.log(formData))}
        >
          <FormEnterAvailableTime {...args} />
          <Button type="submit" data-testid="submit">
            登録
          </Button>
        </form>
      </FormProvider>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByTestId('startTime'), '12:10')
    await userEvent.type(canvas.getByTestId('endTime'), '11:10')
    await userEvent.click(canvas.getByTestId('submit'))
    // await screen.findByText('終了時間は開始時間より後に設定してください')
  },
}
