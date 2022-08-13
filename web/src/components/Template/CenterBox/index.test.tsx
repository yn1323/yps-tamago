import { render } from '@redwoodjs/testing/web'

import { CenterBox } from '.'

describe('CenterBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <CenterBox>
          <div>ChildComponent</div>
        </CenterBox>
      )
    }).not.toThrow()
  })
})
