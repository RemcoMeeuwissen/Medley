import { mapStateToProps } from './ShowMap'

describe('ShowMap container', () => {
  it('mapStateToProps return the expected data for valid input', () => {
    const state = {
      maps: {
        byId: { test: { name: 'Test name' } },
        allIds: ['test']
      }
    }
    const props = {
      match: {
        params: { id: 'test' }
      }
    }

    expect(mapStateToProps(state, props)).toEqual({
      map: {
        name: 'Test name'
      }
    })
  })

  it('mapStateToProps sets map to undefined if the id does not exist in the state', () => {
    const state = {
      maps: {
        byId: {},
        allIds: []
      }
    }
    const props = {
      match: {
        params: { id: 'test' }
      }
    }

    expect(mapStateToProps(state, props)).toEqual({
      map: undefined
    })
  })
})
