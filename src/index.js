import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,

  document.getElementById('app')
)
