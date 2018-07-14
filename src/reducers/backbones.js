const initialState = {
  byId: {},
  allIds: []
}

const backbones = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BACKBONE':
      return {
        byId: {
          ...state['byId'],
          [action.id]: {
            id: action.id,
            backbone: action.backbone,
            tasks: []
          }
        },
        allIds: [...state['allIds'], action.id]
      }
    case 'ADD_TASK':
      if (state['allIds'].includes(action.backbone)) {
        return {
          byId: {
            ...state['byId'],
            [action.backbone]: {
              ...state['byId'][action.backbone],
              tasks: [...state['byId'][action.backbone]['tasks'], action.id]
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

export default backbones
