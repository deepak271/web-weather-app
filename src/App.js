
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Weather from './components/Weather';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Weather/>
      </div>
    )
  }
}


