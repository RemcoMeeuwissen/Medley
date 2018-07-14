import uuidv4 from 'uuid/v4'

export const addMap = name => ({
  type: 'ADD_MAP',
  id: uuidv4(),
  name
})
