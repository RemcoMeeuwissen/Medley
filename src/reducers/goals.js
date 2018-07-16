import types from '../constants'

const initialState = {
  byId: {},
  allIds: []
}

const goals = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GOAL:
      if (state.allIds.includes(action.id)) {
        return state
      }

      return {
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            goal: action.goal,
            backbones: []
          }
        },
        allIds: [...state.allIds, action.id]
      }
    case types.ADD_BACKBONE:
      if (!state.allIds.includes(action.goal)) {
        return state
      }

      if (state.byId[action.goal].backbones.includes(action.id)) {
        return state
      }

      return {
        byId: {
          ...state.byId,
          [action.goal]: {
            ...state.byId[action.goal],
            backbones: [...state.byId[action.goal].backbones, action.id]
          }
        },
        allIds: state.allIds
      }
    default:
      return state
  }
}

export default goals
