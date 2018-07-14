import { addTask } from './TaskActions'

describe('Task actions', () => {
  it('should create an action to add a task', () => {
    const task = 'Test a task'
    const backbone = 'backbone-id'

    const action = addTask(task, backbone)
    const expectedAction = {
      type: 'ADD_TASK',
      id: action.id,
      task,
      backbone
    }

    expect(action).toEqual(expectedAction)
  })
})
