import uuidv4 from 'uuid/v4'

export const addTask = (task, backbone) => ({
  type: 'ADD_TASK',
  id: uuidv4(),
  task,
  backbone
})
