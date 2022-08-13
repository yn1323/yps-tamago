import { render } from '@redwoodjs/testing/web'

import { Logout } from '.'

describe('Logout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Logout />)
    }).not.toThrow()
  })
})
