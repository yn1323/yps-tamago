import {
  shopUserBelongings,
  shopUserBelonging,
  createShopUserBelonging,
  updateShopUserBelonging,
  deleteShopUserBelonging,
} from './shopUserBelongings'
import type { StandardScenario } from './shopUserBelongings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shopUserBelongings', () => {
  scenario(
    'returns all shopUserBelongings',
    async (scenario: StandardScenario) => {
      const result = await shopUserBelongings()

      expect(result.length).toEqual(
        Object.keys(scenario.shopUserBelonging).length
      )
    }
  )

  scenario(
    'returns a single shopUserBelonging',
    async (scenario: StandardScenario) => {
      const result = await shopUserBelonging({
        id: scenario.shopUserBelonging.one.id,
      })

      expect(result).toEqual(scenario.shopUserBelonging.one)
    }
  )

  scenario(
    'creates a shopUserBelonging',
    async (scenario: StandardScenario) => {
      const result = await createShopUserBelonging({
        input: {
          shopId: scenario.shopUserBelonging.two.shopId,
          userId: scenario.shopUserBelonging.two.userId,
          isDeleted: true,
        },
      })

      expect(result.shopId).toEqual(scenario.shopUserBelonging.two.shopId)
      expect(result.userId).toEqual(scenario.shopUserBelonging.two.userId)
      expect(result.isDeleted).toEqual(true)
    }
  )

  scenario(
    'updates a shopUserBelonging',
    async (scenario: StandardScenario) => {
      const original = await shopUserBelonging({
        id: scenario.shopUserBelonging.one.id,
      })
      const result = await updateShopUserBelonging({
        id: original.id,
        input: { isDeleted: false },
      })

      expect(result.isDeleted).toEqual(false)
    }
  )

  scenario(
    'deletes a shopUserBelonging',
    async (scenario: StandardScenario) => {
      const original = await deleteShopUserBelonging({
        id: scenario.shopUserBelonging.one.id,
      })
      const result = await shopUserBelonging({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
