const initialState = {
  byId: {}
}

const maps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MAP':
      return {
        byId: {
          ...state['byId'],
          [action.id]: {
            id: action.id,
            name: action.name,
            goals: []
          }
        }
      }
    case 'ADD_GOAL':
      return {
        byId: {
          ...state['byId'],
          [action.board]: {
            ...state['byId'][action.board],
            goals: [...state['byId'][action.board]['goals'], action.id]
          }
        }
      }
    default:
      return state
  }
}

export default maps
