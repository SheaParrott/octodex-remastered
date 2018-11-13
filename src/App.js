import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Clowder from './Clowder'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Clowder />
        <Footer />
      </div>
    )
  }
}

export default App
