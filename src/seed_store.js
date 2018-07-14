import { addMap, addGoal, addBackbone, addTask } from './actions'

const seedStore = store => {
  const firstMap = addMap('First Map')
  const secondMap = addMap('Second Map')

  const firstGoal = addGoal('First Goal', firstMap.id)
  const secondGoal = addGoal('Second Goal', firstMap.id)
  const thirdGoal = addGoal('Third Goal', secondMap.id)

  const firstBackbone = addBackbone('First Backbone', firstGoal.id)
  const secondBackbone = addBackbone('Second Backbone', firstGoal.id)
  const thirdBackbone = addBackbone('thirdBackbone', secondGoal.id)

  const firstTask = addTask('First Task', firstBackbone.id)
  const secondTask = addTask('Second Task', firstBackbone.id)
  const thirdTask = addTask('Third Task', secondBackbone.id)

  store.dispatch(firstMap)
  store.dispatch(secondMap)
  store.dispatch(firstGoal)
  store.dispatch(secondGoal)
  store.dispatch(thirdGoal)
  store.dispatch(firstBackbone)
  store.dispatch(secondBackbone)
  store.dispatch(thirdBackbone)
  store.dispatch(firstTask)
  store.dispatch(secondTask)
  store.dispatch(thirdTask)
}

export default seedStore
