import {
  neighborhoods,
  neighborhood,
  createNeighborhood,
  updateNeighborhood,
  deleteNeighborhood,
} from './neighborhoods'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('neighborhoods', () => {
  scenario('returns all neighborhoods', async (scenario) => {
    const result = await neighborhoods()

    expect(result.length).toEqual(Object.keys(scenario.neighborhood).length)
  })

  scenario('returns a single neighborhood', async (scenario) => {
    const result = await neighborhood({ id: scenario.neighborhood.one.id })

    expect(result).toEqual(scenario.neighborhood.one)
  })

  scenario('creates a neighborhood', async () => {
    const result = await createNeighborhood({
      input: { name: 'String1166583' },
    })

    expect(result.name).toEqual('String1166583')
  })

  scenario('updates a neighborhood', async (scenario) => {
    const original = await neighborhood({
      id: scenario.neighborhood.one.id,
    })
    const result = await updateNeighborhood({
      id: original.id,
      input: { name: 'String16061392' },
    })

    expect(result.name).toEqual('String16061392')
  })

  scenario('deletes a neighborhood', async (scenario) => {
    const original = await deleteNeighborhood({
      id: scenario.neighborhood.one.id,
    })
    const result = await neighborhood({ id: original.id })

    expect(result).toEqual(null)
  })
})
