import { expect } from '@storybook/jest'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { MenuAuthPc } from '.'

type StoryObj = ComponentStoryObj<typeof MenuAuthPc>
type ComponentProps = Required<typeof MenuAuthPc.defaultProps>

export default {
  title: 'components/Menu/MenuAuthPc',
  component: MenuAuthPc,
} as ComponentMeta<typeof MenuAuthPc>

const args: ComponentProps = {
  children: <div>sample</div>,
}

export const LabelShow: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
}

export const LabelHidden: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(
      canvas.getByLabelText('ナビゲーションのラベルを非表示')
    )

    expect(
      canvas.queryByLabelText('ナビゲーションのラベルを非表示')
    ).not.toBeInTheDocument()
    expect(
      canvas.getByLabelText('ナビゲーションのラベルを表示')
    ).toBeInTheDocument()
  },
}
