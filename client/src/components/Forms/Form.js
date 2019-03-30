import React, { Component } from 'react'

export default class Form extends Component {
    constructor()
    {
        super()
        this.state = {
            name: "",
            email: "",
            option: "",
            notes: ""
        }
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.optionInput = React.createRef();
        this.notesInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            option: this.optionInput.current.value,
            notes: this.notesInput.current.value
        })
        this.sendFormToDatabase();
    }

    // TODO: write general form onchange handler
    onChange(event)
    {
        console.log(event.target.name);
    }


    sendFormToDatabase()
    {
        // send data to database or rest service
        console.log("sending form...", this.state)
    }

    render()
    {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>{this.state.name} | {this.state.email} | {this.state.option} | {this.state.notes}</h1>
            <label>Name: <input type="text" name="name" onChange={this.onChange} /></label>
            <label> Email: <input type="text" name="email" value={this.emailInput} /> </label>
                <label>
                    Request:
                        <select name="option" value={this.optionInput}>
                            <option value="quote">Quote</option>
                            <option value="meeting">Meeting</option>
                            <option value="purchase">Purchase</option>
                        </select>
                </label>
                <br /><br />
                <label>
                    Notes:
                        <textarea name="notes" style={{width: "600px", height: "200px", resize: "none"}} value={this.notesInput} />
                </label>
                <br />
            <input type="submit" value="Submit" />
        </form>
    )
    }
}
