import { render } from '@redwoodjs/testing/web'

import { AuthTemplate } from '.'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthTemplate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthTemplate />)
    }).not.toThrow()
  })
})
