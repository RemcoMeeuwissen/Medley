import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'
import Map from './Map'

describe('Map component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Map map={{ name: 'Test' }} />)
    expect(wrapper).toBeTruthy()
  })

  it('redirects if there is no map data', () => {
    // If we have Map as the component mounted at / we get a endless redirect
    // making it impossible to test. For this reason we're using a temporary
    // component from which we redirect to the Map component (which will then
    // redirect us back to the temporary component)
    const HomeTest = () => <div>Test</div>

    const wrapper = mount(
      <MemoryRouter>
        <div>
          <Route exact path="/" component={HomeTest} />
          <Route component={Map} path="/test" />
        </div>
      </MemoryRouter>
    )

    expect(wrapper.find(HomeTest).props().history.length).toBe(1)
    wrapper
      .find(HomeTest)
      .props()
      .history.push('/test')
    expect(wrapper.find(HomeTest).props().history.length).toBe(2)
  })
})
