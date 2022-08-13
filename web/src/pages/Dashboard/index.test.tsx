import { render } from '@redwoodjs/testing/web'

import { Dashboard } from '.'

describe('Dashboard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dashboard />)
    }).not.toThrow()
  })
})
