import { render } from '@redwoodjs/testing/web'

import { FormLogin } from '.'

describe('FormLogin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormLogin />)
    }).not.toThrow()
  })
})
