import { useState } from 'react'

import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { FormStep } from '.'

type StoryObj = ComponentStoryObj<typeof FormStep>
type ComponentProps = Required<typeof FormStep.defaultProps>

export default {
  title: 'components/Form/FormStep',
  component: FormStep,
} as ComponentMeta<typeof FormStep>

const args: Pick<ComponentProps, 'labels' | 'children' | 'isLoading'> = {
  labels: ['One', 'Two', 'Three'],
  children: [
    <div key={1} style={{ height: '300px' }}>
      First
    </div>,
    <div key={2} style={{ height: '300px' }}>
      Second
    </div>,
    <div key={3} style={{ height: '300px' }}>
      Third
    </div>,
  ],
  isLoading: false,
}
const render = args => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tabIndex, setTabIndex] = useState(0)
  return <FormStep {...args} tabIndex={tabIndex} setTabIndex={setTabIndex} />
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [1080] } },
  render,
}

export const MiddlePage: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getAllByText('次へ')[0])
  },
  render,
}
export const LastPage: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getAllByText('次へ')[0])
    await userEvent.click(canvas.getAllByText('次へ')[1])
  },
  render,
}
