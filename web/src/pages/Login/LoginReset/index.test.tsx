import { render } from '@redwoodjs/testing/web'

import { LoginReset } from '.'

describe('LoginReset', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginReset />)
    }).not.toThrow()
  })
})
