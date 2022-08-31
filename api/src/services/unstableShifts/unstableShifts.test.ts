import {
  unstableShifts,
  unstableShift,
  createUnstableShift,
  deleteUnstableShift,
} from './unstableShifts'
import type { StandardScenario } from './unstableShifts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('unstableShifts', () => {
  scenario('returns all unstableShifts', async (scenario: StandardScenario) => {
    const result = await unstableShifts()

    expect(result.length).toEqual(Object.keys(scenario.unstableShift).length)
  })

  scenario(
    'returns a single unstableShift',
    async (scenario: StandardScenario) => {
      const result = await unstableShift({ id: scenario.unstableShift.one.id })

      expect(result).toEqual(scenario.unstableShift.one)
    }
  )

  scenario('creates a unstableShift', async (scenario: StandardScenario) => {
    const result = await createUnstableShift({
      input: {
        shopId: scenario.unstableShift.two.shopId,
        userId: scenario.unstableShift.two.userId,
        workFrom: '2022-08-31T16:23:04Z',
        workTo: '2022-08-31T16:23:04Z',
        breakFrom: '2022-08-31T16:23:04Z',
        breakTo: '2022-08-31T16:23:04Z',
        isDeleted: true,
      },
    })

    expect(result.shopId).toEqual(scenario.unstableShift.two.shopId)
    expect(result.userId).toEqual(scenario.unstableShift.two.userId)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('deletes a unstableShift', async (scenario: StandardScenario) => {
    const original = await deleteUnstableShift({
      id: scenario.unstableShift.one.id,
    })
    const result = await unstableShift({ id: original.id })

    expect(result).toEqual(null)
  })
})
