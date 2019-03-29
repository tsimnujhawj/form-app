import React, { Component } from 'react'
import '../../assets/styles/Navbar.css'
// TODO: import react-router-dom and use Links

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Form</a>
      </div>
    )
  }
}
