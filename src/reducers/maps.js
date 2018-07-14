import types from '../constants'

const initialState = {
  byId: {},
  allIds: []
}

const maps = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MAP:
      return {
        byId: {
          ...state['byId'],
          [action.id]: {
            id: action.id,
            name: action.name,
            goals: []
          }
        },
        allIds: [...state['allIds'], action.id]
      }
    case types.ADD_GOAL:
      if (state['allIds'].includes(action.map)) {
        return {
          byId: {
            ...state['byId'],
            [action.map]: {
              ...state['byId'][action.map],
              goals: [...state['byId'][action.map]['goals'], action.id]
            }
          },
          allIds: state['allIds']
        }
      }
      return state
    default:
      return state
  }
}

export default maps
