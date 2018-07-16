import React, { Component } from 'react'
import styled from 'styled-components'
import { ShowMaps } from '../../containers'

const StyledApp = styled.div`
  margin: 1em;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <ShowMaps />
      </StyledApp>
    )
  }
}

export default App
