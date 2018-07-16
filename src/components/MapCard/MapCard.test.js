import React from 'react'
import { shallow } from 'enzyme'
import MapCard from './MapCard'

it('renders without crashing', () => {
  const wrapper = shallow(<MapCard name="Test" />)
  expect(wrapper).toBeTruthy()
})
