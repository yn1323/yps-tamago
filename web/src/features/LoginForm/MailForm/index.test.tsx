import { render } from '@redwoodjs/testing/web'

import { MailForm } from '.'

describe('MailForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MailForm mailFormType="login" />)
    }).not.toThrow()
  })
})
