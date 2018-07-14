import uuidv4 from 'uuid/v4'

export const addMap = name => ({
  type: 'ADD_MAP',
  id: uuidv4(),
  name
})

export const addGoal = (goal, board) => ({
  type: 'ADD_GOAL',
  id: uuidv4(),
  goal,
  board
})

export const addBackbone = (backbone, goal) => ({
  type: 'ADD_BACKBONE',
  id: uuidv4(),
  backbone,
  goal
})

export const addTask = (task, backbone) => ({
  type: 'ADD_TASK',
  id: uuidv4(),
  task,
  backbone
})
