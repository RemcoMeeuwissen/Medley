import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const StyledApp = styled.div`
  text-align: center;
`

const RotateLogo = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  animation: ${RotateLogo} infinite 20s linear;
  height: 80px;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const HeaderTitle = styled.h1`
  font-size: 1.5em;
`

const Intro = styled.div`
  font-size: large;
`
class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>
          <Logo src={logo} alt="logo" />
          <HeaderTitle>Welcome to React</HeaderTitle>
        </Header>

        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </StyledApp>
    )
  }
}

export default App
