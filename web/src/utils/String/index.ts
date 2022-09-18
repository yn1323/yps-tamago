export const makeLongStr = (digit = 100) =>
  [...Array(digit).keys()]
    .reduce((acc, cur) => `${acc}${cur}`, '')
    .slice(0, digit)

export const isTimeBefore = (time1: string, time2: string) => {
  const [hour1, minute1] = time1.split(':').map(Number)
  const [hour2, minute2] = time2.split(':').map(Number)
  if (hour1 < hour2) return true
  if (hour1 > hour2) return false
  return minute1 < minute2
}
