import { render } from '@redwoodjs/testing/web'

import { MenuAuthSp } from '.'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MenuAuthSp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MenuAuthSp>
          <div>content</div>
        </MenuAuthSp>
      )
    }).not.toThrow()
  })
})
