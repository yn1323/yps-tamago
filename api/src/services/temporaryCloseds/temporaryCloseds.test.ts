import {
  temporaryCloseds,
  temporaryClosed,
  createTemporaryClosed,
  deleteTemporaryClosed,
} from './temporaryCloseds'
import type { StandardScenario } from './temporaryCloseds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('temporaryCloseds', () => {
  scenario(
    'returns all temporaryCloseds',
    async (scenario: StandardScenario) => {
      const result = await temporaryCloseds()

      expect(result.length).toEqual(
        Object.keys(scenario.temporaryClosed).length
      )
    }
  )

  scenario(
    'returns a single temporaryClosed',
    async (scenario: StandardScenario) => {
      const result = await temporaryClosed({
        id: scenario.temporaryClosed.one.id,
      })

      expect(result).toEqual(scenario.temporaryClosed.one)
    }
  )

  scenario('creates a temporaryClosed', async (scenario: StandardScenario) => {
    const result = await createTemporaryClosed({
      input: {
        organizationId: scenario.temporaryClosed.two.organizationId,
        shopId: scenario.temporaryClosed.two.shopId,
        date: '2022-08-31T16:23:19Z',
        isDeleted: true,
      },
    })

    expect(result.organizationId).toEqual(
      scenario.temporaryClosed.two.organizationId
    )
    expect(result.shopId).toEqual(scenario.temporaryClosed.two.shopId)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('deletes a temporaryClosed', async (scenario: StandardScenario) => {
    const original = await deleteTemporaryClosed({
      id: scenario.temporaryClosed.one.id,
    })
    const result = await temporaryClosed({ id: original.id })

    expect(result).toEqual(null)
  })
})
