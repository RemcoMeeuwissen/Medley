const initialState = {
  byId: {}
}

const goals = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        byId: {
          ...state['byId'],
          [action.id]: {
            id: action.id,
            goal: action.goal,
            backbones: []
          }
        }
      }
    case 'ADD_BACKBONE':
      return {
        byId: {
          ...state['byId'],
          [action.goal]: {
            ...state['byId'][action.goal],
            backbones: [...state['byId'][action.goal]['backbones'], action.id]
          }
        }
      }
    default:
      return state
  }
}

export default goals
