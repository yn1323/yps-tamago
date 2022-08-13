import { render } from '@redwoodjs/testing/web'

import { LoginButtons } from '.'

describe('LoginButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginButtons />)
    }).not.toThrow()
  })
})
