import React from 'react'
import ReactDOM from 'react-dom'
import MapCard from './MapCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MapCard name="Test" />, div)
  ReactDOM.unmountComponentAtNode(div)
})
