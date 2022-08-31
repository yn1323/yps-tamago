import {
  requests,
  request,
  createRequest,
  updateRequest,
  deleteRequest,
} from './requests'
import type { StandardScenario } from './requests.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('requests', () => {
  scenario('returns all requests', async (scenario: StandardScenario) => {
    const result = await requests()

    expect(result.length).toEqual(Object.keys(scenario.request).length)
  })

  scenario('returns a single request', async (scenario: StandardScenario) => {
    const result = await request({ id: scenario.request.one.id })

    expect(result).toEqual(scenario.request.one)
  })

  scenario('creates a request', async (scenario: StandardScenario) => {
    const result = await createRequest({
      input: {
        shopId: scenario.request.two.shopId,
        userId: scenario.request.two.userId,
        dateFrom: '2022-08-31T16:23:09Z',
        dateTo: '2022-08-31T16:23:09Z',
        done: true,
        isDeleted: true,
      },
    })

    expect(result.shopId).toEqual(scenario.request.two.shopId)
    expect(result.userId).toEqual(scenario.request.two.userId)
    expect(result.done).toEqual(true)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('updates a request', async (scenario: StandardScenario) => {
    const original = await request({ id: scenario.request.one.id })
    const result = await updateRequest({
      id: original.id,
      input: { done: false },
    })

    expect(result.done).toEqual(false)
  })

  scenario('deletes a request', async (scenario: StandardScenario) => {
    const original = await deleteRequest({ id: scenario.request.one.id })
    const result = await request({ id: original.id })

    expect(result).toEqual(null)
  })
})
