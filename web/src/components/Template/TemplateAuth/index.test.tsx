import { render } from '@redwoodjs/testing/web'

import { TemplateAuth } from '.'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthTemplate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <TemplateAuth>
          <div>hoge</div>
        </TemplateAuth>
      )
    }).not.toThrow()
  })
})
