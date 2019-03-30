import React, { Component } from 'react'

export default class Form extends Component {
    constructor()
    {
        super()
        this.state = {
            name: "",
            email: "",
            option: ""
        }
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.optionInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            option: this.optionInput.current.value
        })
    }

    handleOptionChange()
    {
        this.setState({
            option: this.optionInput.current.value
        })
    }

    render()
    {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>{this.state.name} | {this.state.email} | {this.state.option}</h1>
            <label>Name: <input type="text" ref={this.nameInput} /></label>
            <label> Email: <input type="text" ref={this.emailInput} /> </label>
                <label>
                    Request:
                        <select ref={this.optionInput}>
                            <option value="quote">Quote</option>
                            <option value="meeting">Meeting</option>
                            <option value="purchase">Purchase</option>
                        </select>
                </label>
            <input type="submit" value="Submit" />
        </form>
    )
    }
}
