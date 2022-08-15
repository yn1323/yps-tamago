import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { MenuAuthSp } from '.'

type StoryObj = ComponentStoryObj<typeof MenuAuthSp>
type ComponentProps = Required<typeof MenuAuthSp.defaultProps>

export default {
  title: 'components/Menu/MenuAuthSp',
  component: MenuAuthSp,
} as ComponentMeta<typeof MenuAuthSp>

const args: ComponentProps = {
  children: <div>main content</div>,
}

export const MenuHidden: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414] } },
}

export const MenuShow: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByLabelText('メニューを開く'))
  },
}
