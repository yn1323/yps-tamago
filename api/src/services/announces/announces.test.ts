import {
  announces,
  announce,
  createAnnounce,
  updateAnnounce,
  deleteAnnounce,
} from './announces'
import type { StandardScenario } from './announces.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('announces', () => {
  scenario('returns all announces', async (scenario: StandardScenario) => {
    const result = await announces()

    expect(result.length).toEqual(Object.keys(scenario.announce).length)
  })

  scenario('returns a single announce', async (scenario: StandardScenario) => {
    const result = await announce({ id: scenario.announce.one.id })

    expect(result).toEqual(scenario.announce.one)
  })

  scenario('creates a announce', async (scenario: StandardScenario) => {
    const result = await createAnnounce({
      input: {
        organizationId: scenario.announce.two.organizationId,
        shopId: scenario.announce.two.shopId,
        message: 'String',
        isDeleted: true,
      },
    })

    expect(result.organizationId).toEqual(scenario.announce.two.organizationId)
    expect(result.shopId).toEqual(scenario.announce.two.shopId)
    expect(result.message).toEqual('String')
    expect(result.isDeleted).toEqual(true)
  })

  scenario('updates a announce', async (scenario: StandardScenario) => {
    const original = await announce({ id: scenario.announce.one.id })
    const result = await updateAnnounce({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a announce', async (scenario: StandardScenario) => {
    const original = await deleteAnnounce({ id: scenario.announce.one.id })
    const result = await announce({ id: original.id })

    expect(result).toEqual(null)
  })
})
