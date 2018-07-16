import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ShowMaps, ShowMap } from '../../containers'

const StyledApp = styled.div`
  margin: 1em;
`

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" component={ShowMaps} />
          <Route path="/map/:id" component={ShowMap} />
        </StyledApp>
      </Router>
    )
  }
}

export default App
