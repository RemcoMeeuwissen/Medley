import React from 'react'
import { shallow } from 'enzyme'
import Maps from './Maps'
import mapReducer from '../../reducers/maps'

it('renders without crashing', () => {
  const initialState = mapReducer(undefined, {})
  const wrapper = shallow(<Maps maps={initialState} />)

  expect(wrapper).toBeTruthy()
})
