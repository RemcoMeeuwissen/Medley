import uuidv4 from 'uuid/v4'

export const addGoal = (goal, map) => ({
  type: 'ADD_GOAL',
  id: uuidv4(),
  goal,
  map
})
