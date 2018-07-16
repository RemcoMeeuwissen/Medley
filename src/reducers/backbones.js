import types from '../constants'

const initialState = {
  byId: {},
  allIds: []
}

const backbones = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BACKBONE:
      if (state.allIds.includes(action.id)) {
        return state
      }

      return {
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            backbone: action.backbone,
            tasks: []
          }
        },
        allIds: [...state.allIds, action.id]
      }
    case types.ADD_TASK:
      if (!state.allIds.includes(action.backbone)) {
        return state
      }

      if (state.byId[action.backbone].tasks.includes(action.id)) {
        return state
      }

      return {
        byId: {
          ...state.byId,
          [action.backbone]: {
            ...state.byId[action.backbone],
            tasks: [...state.byId[action.backbone].tasks, action.id]
          }
        },
        allIds: state.allIds
      }
    default:
      return state
  }
}

export default backbones
