import { makeLongStr } from '.'

describe('makeLongStr', () => {
  it('makeLongStr', () => {
    expect(makeLongStr(5)).toEqual('01234')
    expect(makeLongStr(11)).toEqual('01234567891')
  })
})
