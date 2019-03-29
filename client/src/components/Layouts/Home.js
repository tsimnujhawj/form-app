import React, { Component } from 'react'
import Header from './Header'
import Navbar from '../Navigation/Navbar'
import FormContainer from '../Forms/FormContainer';

export default class Home extends Component {
  render() {
    return (
        <div style={{textAlign: "center"}}>
            <Header />
            <Navbar />
            <FormContainer />
        </div>
    )
  }
}
