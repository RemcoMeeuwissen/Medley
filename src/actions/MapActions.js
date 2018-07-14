import uuidv4 from 'uuid/v4'
import types from '../constants'

export const addMap = name => ({
  type: types.ADD_MAP,
  id: uuidv4(),
  name
})
