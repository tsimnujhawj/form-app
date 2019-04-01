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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.sendFormToDatabase();
    }

    handleChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    sendFormToDatabase()
    {
        // send data to database or rest service
        console.log("sending form...", this.state)
        fetch("https://my-json-server.typicode.com/tsimnujhawj/form-app/body", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                option: this.state.option,
                notes: this.state.notes
            })
        }).then(res => res.json())
    }

    fetchData()
    {
        fetch("https://my-json-server.typicode.com/tsimnujhawj/form-app/body", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(res => console.log(res))
    }

    componentDidMount()
    {
        this.fetchData();
    }

    render()
    {
    return (
        <form onSubmit={this.handleSubmit}>
            <h4>Please complete the form below</h4>
            <label>Name: <input type="text" name="name" onChange={this.handleChange} /></label>
            <label> Email: <input type="text" name="email" onChange={this.handleChange} /> </label>
                <label>
                    Request:
                        <select name="option" onChange={this.handleChange}>
                            <option>Select a request</option>
                            <option value="quote">Quote</option>
                            <option value="meeting">Meeting</option>
                            <option value="purchase">Purchase</option>
                        </select>
                </label>
                <br /><br />
                <label>
                    Notes:
                        <textarea name="notes" style={{width: "600px", height: "200px", resize: "none"}} value={this.notesInput} onChange={this.handleChange} />
                </label>
                <br />
            <input type="submit" value="Submit" />
        </form>
    )
    }
}
