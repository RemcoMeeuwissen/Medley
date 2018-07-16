import React from 'react'
import { shallow } from 'enzyme'
import Maps from './Maps'
import MapCard from '../MapCard'
import mapReducer from '../../reducers/maps'
import { addMap } from '../../actions/MapActions'

describe('Maps component', () => {
  it('renders without crashing', () => {
    const initialState = mapReducer(undefined, {})
    const wrapper = shallow(<Maps maps={initialState} />)

    expect(wrapper).toBeTruthy()
  })

  it('shows cards for the maps passed to it', () => {
    const addMapAction = addMap('First map')
    const secondAddMapAction = addMap('Second map')

    let initialState = mapReducer(undefined, addMapAction)
    initialState = mapReducer(initialState, secondAddMapAction)

    const wrapper = shallow(<Maps maps={initialState} />)

    expect(wrapper.contains(<MapCard name="First map" />)).toEqual(true)
    expect(wrapper.contains(<MapCard name="Second map" />)).toEqual(true)
  })
})
