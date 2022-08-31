import {
  stableShifts,
  stableShift,
  createStableShift,
  updateStableShift,
  deleteStableShift,
} from './stableShifts'
import type { StandardScenario } from './stableShifts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stableShifts', () => {
  scenario('returns all stableShifts', async (scenario: StandardScenario) => {
    const result = await stableShifts()

    expect(result.length).toEqual(Object.keys(scenario.stableShift).length)
  })

  scenario(
    'returns a single stableShift',
    async (scenario: StandardScenario) => {
      const result = await stableShift({ id: scenario.stableShift.one.id })

      expect(result).toEqual(scenario.stableShift.one)
    }
  )

  scenario('creates a stableShift', async (scenario: StandardScenario) => {
    const result = await createStableShift({
      input: {
        shopId: scenario.stableShift.two.shopId,
        userId: scenario.stableShift.two.userId,
        workFrom: '2022-08-31T16:22:59Z',
        workTo: '2022-08-31T16:22:59Z',
        breakFrom: '2022-08-31T16:22:59Z',
        breakTo: '2022-08-31T16:22:59Z',
        isDeleted: true,
      },
    })

    expect(result.shopId).toEqual(scenario.stableShift.two.shopId)
    expect(result.userId).toEqual(scenario.stableShift.two.userId)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('updates a stableShift', async (scenario: StandardScenario) => {
    const original = await stableShift({ id: scenario.stableShift.one.id })
    const result = await updateStableShift({
      id: original.id,
      input: { workFrom: '2022-09-01T16:22:59Z' },
    })

    expect(result.workFrom).toEqual('2022-09-01T16:22:59Z')
  })

  scenario('deletes a stableShift', async (scenario: StandardScenario) => {
    const original = await deleteStableShift({
      id: scenario.stableShift.one.id,
    })
    const result = await stableShift({ id: original.id })

    expect(result).toEqual(null)
  })
})
