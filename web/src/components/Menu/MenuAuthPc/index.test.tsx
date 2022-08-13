import { render } from '@redwoodjs/testing/web'

import { MenuAuthPc } from '.'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthMenuPc', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MenuAuthPc>
          <div>aaa</div>
        </MenuAuthPc>
      )
    }).not.toThrow()
  })
})
