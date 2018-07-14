import { addGoal } from './GoalActions'

describe('Goal actions', () => {
  it('should create an action to add a goal', () => {
    const goal = 'Test a goal'
    const board = 'board-id'

    const action = addGoal(goal, board)
    const expectedAction = {
      type: 'ADD_GOAL',
      id: action.id,
      goal,
      board
    }

    expect(action).toEqual(expectedAction)
  })
})
