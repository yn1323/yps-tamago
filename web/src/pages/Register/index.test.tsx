import { render } from '@redwoodjs/testing/web'

import { Register } from '.'

describe('Register', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Register />)
    }).not.toThrow()
  })
})
