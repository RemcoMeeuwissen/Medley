import uuidv4 from 'uuid/v4'
import types from '../constants'

export const addGoal = (goal, map) => ({
  type: types.ADD_GOAL,
  id: uuidv4(),
  goal,
  map
})
