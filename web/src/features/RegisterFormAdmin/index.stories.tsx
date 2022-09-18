/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
// import { userEvent, within, screen } from '@storybook/testing-library'

import { RegisterFormAdmin } from '.'

type StoryObj = ComponentStoryObj<typeof RegisterFormAdmin>
type ComponentProps = Required<typeof RegisterFormAdmin.defaultProps>

export default {
  title: 'features/RegisterFormAdmin',
  component: RegisterFormAdmin,
} as ComponentMeta<typeof RegisterFormAdmin>

const args: ComponentProps = {
  userName: 'userName',
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
