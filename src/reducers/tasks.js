const tasks = (state = { byId: {} }, action) => {
  switch (action.type) {
    case 'ADD_TASK':
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
