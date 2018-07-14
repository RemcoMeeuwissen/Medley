import { combineReducers } from 'redux'
import maps from './maps'
import goals from './goals'
import backbones from './backbones'
import tasks from './tasks'

export default combineReducers({
  maps,
  goals,
  backbones,
  tasks
})
