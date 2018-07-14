import uuidv4 from 'uuid/v4'

export const addGoal = (goal, board) => ({
  type: 'ADD_GOAL',
  id: uuidv4(),
  goal,
  board
})
