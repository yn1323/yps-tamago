export const makeLongStr = (digit = 100) =>
  [...Array(digit).keys()]
    .reduce((acc, cur) => `${acc}${cur}`, '')
    .slice(0, digit)
