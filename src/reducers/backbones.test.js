import reducer from './backbones'
import { addBackbone, addTask } from '../actions'

describe('Backbones reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      byId: {},
      allIds: []
    })
  })

  it('should handle a single ADD_BACKBONE', () => {
    const addBackboneAction = addBackbone('Backbone description')

    expect(reducer(undefined, addBackboneAction)).toEqual({
      byId: {
        [addBackboneAction.id]: {
          id: addBackboneAction.id,
          backbone: addBackboneAction.backbone,
          tasks: []
        }
      },
      allIds: [addBackboneAction.id]
    })
  })

  it('should handle multiple ADD_BACKBONEs', () => {
    const addBackboneAction = addBackbone('Backbone description')
    const secondAddBackboneAction = addBackbone('Another backbone description')

    const reducerState = reducer(undefined, addBackboneAction)

    expect(reducer(reducerState, secondAddBackboneAction)).toEqual({
      byId: {
        [addBackboneAction.id]: {
          id: addBackboneAction.id,
          backbone: addBackboneAction.backbone,
          tasks: []
        },
        [secondAddBackboneAction.id]: {
          id: secondAddBackboneAction.id,
          backbone: secondAddBackboneAction.backbone,
          tasks: []
        }
      },
      allIds: [addBackboneAction.id, secondAddBackboneAction.id]
    })
  })

  it('should handle a single ADD_TASK', () => {
    const addBackboneAction = addBackbone('Backbone description')
    const addTaskAction = addTask('Task description', addBackboneAction.id)

    const reducerState = reducer(undefined, addBackboneAction)

    expect(reducer(reducerState, addTaskAction)).toEqual({
      byId: {
        [addBackboneAction.id]: {
          id: addBackboneAction.id,
          backbone: addBackboneAction.backbone,
          tasks: [addTaskAction.id]
        }
      },
      allIds: [addBackboneAction.id]
    })
  })

  it('should handle a multiple ADD_TASKs', () => {
    const addBackboneAction = addBackbone('Backbone description')
    const secondAddBackboneAction = addBackbone('Another backbone description')
    const addTaskAction = addTask('Task description', addBackboneAction.id)
    const secondAddTaskAction = addTask(
      'Task description',
      addBackboneAction.id
    )
    const thirdAddTaskAction = addTask(
      'Task description',
      secondAddBackboneAction.id
    )

    let reducerState = reducer(undefined, addBackboneAction)
    reducerState = reducer(reducerState, secondAddBackboneAction)
    reducerState = reducer(reducerState, addTaskAction)
    reducerState = reducer(reducerState, secondAddTaskAction)

    expect(reducer(reducerState, thirdAddTaskAction)).toEqual({
      byId: {
        [addBackboneAction.id]: {
          id: addBackboneAction.id,
          backbone: addBackboneAction.backbone,
          tasks: [addTaskAction.id, secondAddTaskAction.id]
        },
        [secondAddBackboneAction.id]: {
          id: secondAddBackboneAction.id,
          backbone: secondAddBackboneAction.backbone,
          tasks: [thirdAddTaskAction.id]
        }
      },
      allIds: [addBackboneAction.id, secondAddBackboneAction.id]
    })
  })

  it('should ignore a ADD_TASK with a nonexistent backbone', () => {
    const addTaskAction = addTask('Task description', 'none')

    expect(reducer(undefined, addTaskAction)).toEqual({
      byId: {},
      allIds: []
    })
  })
})
