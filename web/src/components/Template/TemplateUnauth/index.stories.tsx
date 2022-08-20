import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { TemplateUnauth } from '.'

type StoryObj = ComponentStoryObj<typeof TemplateUnauth>
type ComponentProps = Required<typeof TemplateUnauth.defaultProps>

export default {
  title: 'components/Template/TemplateUnauth',
  component: TemplateUnauth,
} as ComponentMeta<typeof TemplateUnauth>

const args: ComponentProps = {
  children: <div>hoge</div>,
  showLoginButton: true,
  showLogoutButton: false,
}

export const LoginButtonShow: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414] } },
}

export const LogoutButtonShow: StoryObj = {
  args: { ...args, showLoginButton: false, showLogoutButton: true },
  parameters: { chromatic: { viewports: [1080] } },
}
