import {
  operations,
  operation,
  createOperation,
  updateOperation,
  deleteOperation,
} from './operations'
import type { StandardScenario } from './operations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('operations', () => {
  scenario('returns all operations', async (scenario: StandardScenario) => {
    const result = await operations()

    expect(result.length).toEqual(Object.keys(scenario.operation).length)
  })

  scenario('returns a single operation', async (scenario: StandardScenario) => {
    const result = await operation({ id: scenario.operation.one.id })

    expect(result).toEqual(scenario.operation.one)
  })

  scenario('creates a operation', async (scenario: StandardScenario) => {
    const result = await createOperation({
      input: {
        shopId: scenario.operation.two.shopId,
        operationName: 'String',
        icon: 'String',
        color: 'String',
        isDeleted: true,
      },
    })

    expect(result.shopId).toEqual(scenario.operation.two.shopId)
    expect(result.operationName).toEqual('String')
    expect(result.icon).toEqual('String')
    expect(result.color).toEqual('String')
    expect(result.isDeleted).toEqual(true)
  })

  scenario('updates a operation', async (scenario: StandardScenario) => {
    const original = await operation({ id: scenario.operation.one.id })
    const result = await updateOperation({
      id: original.id,
      input: { operationName: 'String2' },
    })

    expect(result.operationName).toEqual('String2')
  })

  scenario('deletes a operation', async (scenario: StandardScenario) => {
    const original = await deleteOperation({ id: scenario.operation.one.id })
    const result = await operation({ id: original.id })

    expect(result).toEqual(null)
  })
})
