import {
  organizationShopBelongings,
  organizationShopBelonging,
  createOrganizationShopBelonging,
  updateOrganizationShopBelonging,
  deleteOrganizationShopBelonging,
} from './organizationShopBelongings'
import type { StandardScenario } from './organizationShopBelongings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organizationShopBelongings', () => {
  scenario(
    'returns all organizationShopBelongings',
    async (scenario: StandardScenario) => {
      const result = await organizationShopBelongings()

      expect(result.length).toEqual(
        Object.keys(scenario.organizationShopBelonging).length
      )
    }
  )

  scenario(
    'returns a single organizationShopBelonging',
    async (scenario: StandardScenario) => {
      const result = await organizationShopBelonging({
        id: scenario.organizationShopBelonging.one.id,
      })

      expect(result).toEqual(scenario.organizationShopBelonging.one)
    }
  )

  scenario(
    'creates a organizationShopBelonging',
    async (scenario: StandardScenario) => {
      const result = await createOrganizationShopBelonging({
        input: {
          organizationId: scenario.organizationShopBelonging.two.organizationId,
          shopId: scenario.organizationShopBelonging.two.shopId,
          isDeleted: true,
        },
      })

      expect(result.organizationId).toEqual(
        scenario.organizationShopBelonging.two.organizationId
      )
      expect(result.shopId).toEqual(
        scenario.organizationShopBelonging.two.shopId
      )
      expect(result.isDeleted).toEqual(true)
    }
  )

  scenario(
    'updates a organizationShopBelonging',
    async (scenario: StandardScenario) => {
      const original = await organizationShopBelonging({
        id: scenario.organizationShopBelonging.one.id,
      })
      const result = await updateOrganizationShopBelonging({
        id: original.id,
        input: { isDeleted: false },
      })

      expect(result.isDeleted).toEqual(false)
    }
  )

  scenario(
    'deletes a organizationShopBelonging',
    async (scenario: StandardScenario) => {
      const original = await deleteOrganizationShopBelonging({
        id: scenario.organizationShopBelonging.one.id,
      })
      const result = await organizationShopBelonging({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
