import { render } from '@redwoodjs/testing/web'

import { TemplateUnauth } from '.'

describe('TemplateUnauth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TemplateUnauth />)
    }).not.toThrow()
  })
})
