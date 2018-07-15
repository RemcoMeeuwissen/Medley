import React, { Component } from 'react'
import styled from 'styled-components'
import { Maps } from '../../containers'

const StyledApp = styled.div`
  margin: 1em;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Maps />
      </StyledApp>
    )
  }
}

export default App
