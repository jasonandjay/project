import React, { Component, Fragment } from 'react'
import Router from './router/router'
import routerConfig from './router/router.config'
import Header from './components/header/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <header><Header/></header>
        <section><Router routes={routerConfig.routes}></Router></section>
      </Fragment>
    )
  }
}

export default App
