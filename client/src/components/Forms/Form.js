import React, { Component } from 'react'

export default class Form extends Component {
    constructor()
    {
        super()
        this.state = {
            name: "",
            email: ""
        }
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({
            name: this.nameInput.current.value,
            email: this.emailInput.current.value
        })
    }

    render()
    {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>{this.state.name} | {this.state.email}</h1>
            <label>Name: <input type="text" ref={this.nameInput} /></label>
            <label> Email: <input type="text" ref={this.emailInput} /> </label>
            <input type="submit" value="Submit" />
        </form>
    )
    }
}
