import React, { Component } from 'react'
import { Navbar } from './components/shared/Navbar'
import { HomePage } from './pages/homepage/HomePage'

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    )
  }
}
