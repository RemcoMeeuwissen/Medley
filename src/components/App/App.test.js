import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import App from './App'

it('renders without crashing', () => {
  const store = createStore(rootReducer)
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(wrapper).toBeTruthy()
})
