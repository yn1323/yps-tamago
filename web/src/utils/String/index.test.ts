import { isTimeBefore, makeLongStr } from '.'

describe('makeLongStr', () => {
  it('makeLongStr', () => {
    expect(makeLongStr(5)).toEqual('01234')
    expect(makeLongStr(11)).toEqual('01234567891')
  })
})

describe('isTimeBefore', () => {
  it('isTimeBefore', () => {
    expect(isTimeBefore('12:15', '12:16')).toBeTruthy()
    expect(isTimeBefore('12:19', '12:16')).toBeFalsy()
  })
})
