import React, { Component } from 'react'
import Form from './Form'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
        <div style={{textAlign: "center"}}>
            <Header />
            <Form />
        </div>
    )
  }
}
