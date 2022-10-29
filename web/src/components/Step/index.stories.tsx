import { useState } from 'react'

import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Step } from '.'

type StoryObj = ComponentStoryObj<typeof Step>
type ComponentProps = Required<typeof Step.defaultProps>

export default {
  title: 'components/Step',
  component: Step,
} as ComponentMeta<typeof Step>

const args: Pick<ComponentProps, 'labels' | 'children'> = {
  labels: ['One', 'Two', 'Three'],
  children: [
    <div key={1}>First</div>,
    <div key={2}>Second</div>,
    <div key={3}>Third</div>,
  ],
}
const render = args => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tabIndex, setTabIndex] = useState(0)
  return <Step {...args} tabIndex={tabIndex} setTabIndex={setTabIndex} />
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
  render,
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByLabelText('Two'))
  },
  render,
}
