/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
// import { userEvent, within, screen } from '@storybook/testing-library'

import { {{ inputs.component | pascal }} } from '.'

type StoryObj = ComponentStoryObj<typeof {{ inputs.component | pascal }}>
type ComponentProps = Required<typeof {{ inputs.component | pascal }}.defaultProps>

export default {
  title: '{{ inputs.path }}/{{ inputs.component | pascal }}',
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}

// export const Test: StoryObj = {
//   args: { ...args },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   await userEvent.click(canvas.getByTestId('close'))
  //   await screen.findByText('マイページ')
  // },
// }
