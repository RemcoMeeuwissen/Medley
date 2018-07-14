import reducer from './goals'
import { addGoal, addBackbone } from '../actions'

describe('Goals reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      byId: {}
    })
  })

  it('should handle a single ADD_GOAL', () => {
    const addGoalAction = addGoal('Goal description')

    expect(reducer([], addGoalAction)).toEqual({
      byId: {
        [addGoalAction.id]: {
          id: addGoalAction.id,
          goal: addGoalAction.goal,
          backbones: []
        }
      }
    })
  })

  it('should handle multiple ADD_GOALs', () => {
    const addGoalAction = addGoal('Goal description')
    const secondAddGoalAction = addGoal('Second goal description')

    const reducerState = reducer([], addGoalAction)

    expect(reducer(reducerState, secondAddGoalAction)).toEqual({
      byId: {
        [addGoalAction.id]: {
          id: addGoalAction.id,
          goal: addGoalAction.goal,
          backbones: []
        },
        [secondAddGoalAction.id]: {
          id: secondAddGoalAction.id,
          goal: secondAddGoalAction.goal,
          backbones: []
        }
      }
    })
  })

  it('should handle a single ADD_BACKBONE', () => {
    const addGoalAction = addGoal('Goal description')
    const addBackboneAction = addBackbone(
      'Backbone description',
      addGoalAction.id
    )

    const reducerState = reducer([], addGoalAction)

    expect(reducer(reducerState, addBackboneAction)).toEqual({
      byId: {
        [addGoalAction.id]: {
          id: addGoalAction.id,
          goal: addGoalAction.goal,
          backbones: [addBackboneAction.id]
        }
      }
    })
  })

  it('should handle a multiple ADD_BACKBONEs', () => {
    const addGoalAction = addGoal('Goal description')
    const secondAddGoalAction = addGoal('Second goal description')
    const addBackboneAction = addBackbone(
      'Backbone description',
      addGoalAction.id
    )
    const secondAddBackboneAction = addBackbone(
      'Second backbone description',
      addGoalAction.id
    )
    const thirdAddBackboneAction = addBackbone(
      'Third backbone description',
      secondAddGoalAction.id
    )

    let reducerState = reducer([], addGoalAction)
    reducerState = reducer(reducerState, secondAddGoalAction)
    reducerState = reducer(reducerState, addBackboneAction)
    reducerState = reducer(reducerState, secondAddBackboneAction)

    expect(reducer(reducerState, thirdAddBackboneAction)).toEqual({
      byId: {
        [addGoalAction.id]: {
          id: addGoalAction.id,
          goal: addGoalAction.goal,
          backbones: [addBackboneAction.id, secondAddBackboneAction.id]
        },
        [secondAddGoalAction.id]: {
          id: secondAddGoalAction.id,
          goal: secondAddGoalAction.goal,
          backbones: [thirdAddBackboneAction.id]
        }
      }
    })
  })
})
