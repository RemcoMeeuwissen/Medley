import uuidv4 from 'uuid/v4'
import types from '../constants'

export const addBackbone = (backbone, goal) => ({
  type: types.ADD_BACKBONE,
  id: uuidv4(),
  backbone,
  goal
})
