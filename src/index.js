import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import App from './App'

const Screen = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Screen>
    <App />
    <GlobalStyles bodyColor="#9F2828" />
  </Screen>
)
