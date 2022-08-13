import { render } from '@redwoodjs/testing/web'

import { {{ inputs.component | pascal }} } from '.'

describe('{{ inputs.component | pascal }}', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<{{ inputs.component | pascal }} />)
    }).not.toThrow()
  })
})
