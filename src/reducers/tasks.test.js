import reducer from './tasks'
import { addTask } from '../actions'

describe('Tasks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      byId: {}
    })
  })

  it('should handle a single ADD_TASK', () => {
    const addTaskAction = addTask('Task description')

    expect(reducer([], addTaskAction)).toEqual({
      byId: {
        [addTaskAction.id]: {
          id: addTaskAction.id,
          task: addTaskAction.task
        }
      }
    })
  })

  it('should handle multiple ADD_TASKs', () => {
    const addTaskAction = addTask('Task description')
    const secondAddTaskAction = addTask('Second task description')

    const reducerState = reducer([], addTaskAction)

    expect(reducer(reducerState, secondAddTaskAction)).toEqual({
      byId: {
        [addTaskAction.id]: {
          id: addTaskAction.id,
          task: addTaskAction.task
        },
        [secondAddTaskAction.id]: {
          id: secondAddTaskAction.id,
          task: secondAddTaskAction.task
        }
      }
    })
  })
})
