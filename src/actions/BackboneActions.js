import uuidv4 from 'uuid/v4'

export const addBackbone = (backbone, goal) => ({
  type: 'ADD_BACKBONE',
  id: uuidv4(),
  backbone,
  goal
})
