import types from '../constants'

const initialState = {
  byId: {}
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        byId: {
          ...state['byId'],
          [action.id]: {
            id: action.id,
            task: action.task
          }
        }
      }
    default:
      return state
  }
}

export default tasks
