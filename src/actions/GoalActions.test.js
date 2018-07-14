import { addGoal } from './GoalActions'

describe('Goal actions', () => {
  it('should create an action to add a goal', () => {
    const goal = 'Test a goal'
    const map = 'map-id'

    const action = addGoal(goal, map)
    const expectedAction = {
      type: 'ADD_GOAL',
      id: action.id,
      goal,
      map
    }

    expect(action).toEqual(expectedAction)
  })
})
