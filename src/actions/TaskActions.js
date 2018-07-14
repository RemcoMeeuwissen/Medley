import uuidv4 from 'uuid/v4'
import types from '../constants'

export const addTask = (task, backbone) => ({
  type: types.ADD_TASK,
  id: uuidv4(),
  task,
  backbone
})
