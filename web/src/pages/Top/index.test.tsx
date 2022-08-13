import { render } from '@redwoodjs/testing/web'

import { Top } from '.'

describe('Top', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Top />)
    }).not.toThrow()
  })
})
