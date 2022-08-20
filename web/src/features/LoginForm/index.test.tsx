import { render } from '@redwoodjs/testing/web'

import { LoginForm } from '.'

describe('LoginForm', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<LoginForm mailFormType="login" />)
    }).not.toThrow()
  })
})
