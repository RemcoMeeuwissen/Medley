import { addBackbone } from './BackboneActions'
import types from '../constants'

describe('Backbone actions', () => {
  it('should create an action to add a backbone', () => {
    const backbone = 'Test a backbone'
    const goal = 'test-id'

    const action = addBackbone(backbone, goal)
    const expectedAction = {
      type: types.ADD_BACKBONE,
      id: action.id,
      backbone,
      goal
    }

    expect(action).toEqual(expectedAction)
  })
})
