import { render } from '@redwoodjs/testing/web'

import { LoginRegister } from '.'

describe('LoginRegister', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginRegister />)
    }).not.toThrow()
  })
})
