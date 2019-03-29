import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" ref={(input) => this.input = input} />
        </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }
}
