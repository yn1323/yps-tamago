import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import MenuAuthPc from './MenuAuthPc'

type StoryObj = ComponentStoryObj<typeof MenuAuthPc>
type ComponentProps = Required<typeof MenuAuthPc.defaultProps>

export default {
  title: 'components/Menu/MenuAuthPc',
  component: MenuAuthPc,
} as ComponentMeta<typeof MenuAuthPc>

const args: ComponentProps = {
  children: <div>sample</div>,
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('openButton'))
  },
}
