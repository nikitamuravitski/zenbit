import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import store from './store'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
  ,
  document.getElementById('root')
)
