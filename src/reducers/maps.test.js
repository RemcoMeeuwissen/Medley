import reducer from './maps'
import { addMap, addGoal } from '../actions'

describe('Maps reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      byId: {}
    })
  })

  it('should handle a single ADD_MAP', () => {
    const addMapAction = addMap('Map name')

    expect(reducer([], addMapAction)).toEqual({
      byId: {
        [addMapAction.id]: {
          id: addMapAction.id,
          name: addMapAction.name,
          goals: []
        }
      }
    })
  })

  it('should handle multiple ADD_MAPs', () => {
    const addMapAction = addMap('Map name')
    const secondAddMapAction = addMap('Another name')

    const reducerState = reducer([], addMapAction)

    expect(reducer(reducerState, secondAddMapAction)).toEqual({
      byId: {
        [addMapAction.id]: {
          id: addMapAction.id,
          name: addMapAction.name,
          goals: []
        },
        [secondAddMapAction.id]: {
          id: secondAddMapAction.id,
          name: secondAddMapAction.name,
          goals: []
        }
      }
    })
  })

  it('should handle a single ADD_GOAL', () => {
    const addMapAction = addMap('Map name')
    const addGoalAction = addGoal('Goal description', addMapAction.id)

    const reducerState = reducer([], addMapAction)

    expect(reducer(reducerState, addGoalAction)).toEqual({
      byId: {
        [addMapAction.id]: {
          id: addMapAction.id,
          name: addMapAction.name,
          goals: [addGoalAction.id]
        }
      }
    })
  })

  it('should handle a multiple ADD_GOALs', () => {
    const addMapAction = addMap('Map name')
    const secondAddMapAction = addMap('Second map')
    const addGoalAction = addGoal('Goal description', addMapAction.id)
    const secondAddGoalAction = addGoal('Second description', addMapAction.id)
    const thirdAddGoalAction = addGoal(
      'Third description',
      secondAddMapAction.id
    )

    let reducerState = reducer([], addMapAction)
    reducerState = reducer(reducerState, secondAddMapAction)
    reducerState = reducer(reducerState, addGoalAction)
    reducerState = reducer(reducerState, secondAddGoalAction)

    expect(reducer(reducerState, thirdAddGoalAction)).toEqual({
      byId: {
        [addMapAction.id]: {
          id: addMapAction.id,
          name: addMapAction.name,
          goals: [addGoalAction.id, secondAddGoalAction.id]
        },
        [secondAddMapAction.id]: {
          id: secondAddMapAction.id,
          name: secondAddMapAction.name,
          goals: [thirdAddGoalAction.id]
        }
      }
    })
  })
})
