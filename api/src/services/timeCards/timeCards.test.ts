import {
  timeCards,
  timeCard,
  createTimeCard,
  deleteTimeCard,
} from './timeCards'
import type { StandardScenario } from './timeCards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('timeCards', () => {
  scenario('returns all timeCards', async (scenario: StandardScenario) => {
    const result = await timeCards()

    expect(result.length).toEqual(Object.keys(scenario.timeCard).length)
  })

  scenario('returns a single timeCard', async (scenario: StandardScenario) => {
    const result = await timeCard({ id: scenario.timeCard.one.id })

    expect(result).toEqual(scenario.timeCard.one)
  })

  scenario('creates a timeCard', async (scenario: StandardScenario) => {
    const result = await createTimeCard({
      input: {
        shopId: scenario.timeCard.two.shopId,
        userId: scenario.timeCard.two.userId,
        workFrom: '2022-08-31T16:23:14Z',
        workTo: '2022-08-31T16:23:14Z',
        breakFrom: '2022-08-31T16:23:14Z',
        breakTo: '2022-08-31T16:23:14Z',
        isDeleted: true,
      },
    })

    expect(result.shopId).toEqual(scenario.timeCard.two.shopId)
    expect(result.userId).toEqual(scenario.timeCard.two.userId)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('deletes a timeCard', async (scenario: StandardScenario) => {
    const original = await deleteTimeCard({ id: scenario.timeCard.one.id })
    const result = await timeCard({ id: original.id })

    expect(result).toEqual(null)
  })
})
