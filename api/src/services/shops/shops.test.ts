import { shops, shop, createShop, updateShop, deleteShop } from './shops'
import type { StandardScenario } from './shops.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shops', () => {
  scenario('returns all shops', async (scenario: StandardScenario) => {
    const result = await shops()

    expect(result.length).toEqual(Object.keys(scenario.shop).length)
  })

  scenario('returns a single shop', async (scenario: StandardScenario) => {
    const result = await shop({ id: scenario.shop.one.id })

    expect(result).toEqual(scenario.shop.one)
  })

  scenario('creates a shop', async () => {
    const result = await createShop({
      input: {
        shopName: 'String',
        openTime: '2022-08-31T16:22:42Z',
        closeTime: '2022-08-31T16:22:42Z',
        timeUnit: 6018111,
        submitFrequency: 'String',
        avatar: 'String',
        useTimeCard: true,
        isDeleted: true,
      },
    })

    expect(result.shopName).toEqual('String')
    expect(result.timeUnit).toEqual(6018111)
    expect(result.submitFrequency).toEqual('String')
    expect(result.avatar).toEqual('String')
    expect(result.useTimeCard).toEqual(true)
    expect(result.isDeleted).toEqual(true)
  })

  scenario('updates a shop', async (scenario: StandardScenario) => {
    const original = await shop({ id: scenario.shop.one.id })
    const result = await updateShop({
      id: original.id,
      input: { shopName: 'String2' },
    })

    expect(result.shopName).toEqual('String2')
  })

  scenario('deletes a shop', async (scenario: StandardScenario) => {
    const original = await deleteShop({ id: scenario.shop.one.id })
    const result = await shop({ id: original.id })

    expect(result).toEqual(null)
  })
})
