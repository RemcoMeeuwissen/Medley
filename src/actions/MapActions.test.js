import { addMap } from './MapActions'
import types from '../constants'

describe('Map actions', () => {
  it('should create an action to add a map', () => {
    const name = 'Test a map'

    const action = addMap(name)
    const expectedAction = {
      type: types.ADD_MAP,
      id: action.id,
      name
    }

    expect(action).toEqual(expectedAction)
  })
})
