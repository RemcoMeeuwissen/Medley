const backbones = (state = { byId: {} }, action) => {
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
        }
      }
    case 'ADD_TASK':
      return {
        byId: {
          ...state['byId'],
          [action.backbone]: {
            ...state['byId'][action.backbone],
            tasks: [...state['byId'][action.backbone]['tasks'], action.id]
          }
        }
      }
    default:
      return state
  }
}

export default backbones
