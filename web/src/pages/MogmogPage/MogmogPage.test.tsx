import { render } from '@redwoodjs/testing/web'

import MogmogPage from './MogmogPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MogmogPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MogmogPage />)
    }).not.toThrow()
  })
})
