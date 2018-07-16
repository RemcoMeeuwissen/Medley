import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import App from './App'
import ShowMaps from '../../containers/ShowMaps'
import ShowMap from '../../containers/ShowMap'
import { addMap } from '../../actions/MapActions'

describe('App component', () => {
  it('renders the / route without crashing', () => {
    const store = createStore(rootReducer)
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper).toBeTruthy()
  })

  it('renders the /map/:id route without crashing', () => {
    const store = createStore(rootReducer)
    const addMapAction = addMap('Map name')

    store.dispatch(addMapAction)

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.find(ShowMaps)).toHaveLength(1)
    expect(wrapper.find(ShowMap)).toHaveLength(0)

    wrapper.find('MapCard').simulate('click', { button: 0 })

    expect(wrapper.find(ShowMaps)).toHaveLength(0)
    expect(wrapper.find(ShowMap)).toHaveLength(1)

    expect(wrapper).toBeTruthy()
  })
})
