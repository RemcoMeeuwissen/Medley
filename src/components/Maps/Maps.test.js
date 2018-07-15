import React from 'react'
import ReactDOM from 'react-dom'
import Maps from './Maps'
import mapReducer from '../../reducers/maps'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const initialState = mapReducer(undefined, {})
  ReactDOM.render(<Maps maps={initialState} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
