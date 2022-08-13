import { render } from '@redwoodjs/testing/web'

import { LoginForm } from '.'

describe('LoginForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginForm mailFormType="login" />)
    }).not.toThrow()
  })
})
