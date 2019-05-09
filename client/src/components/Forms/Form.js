import React, { Component } from 'react'
import axios from 'axios'

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
        // setup data to be sent
        let dataSend = {
            "name": this.state.name,
            "email": this.state.email,
            "option": this.state.option,
            "notes": this.state.notes
        }
        const bodyFormData = new FormData()
        bodyFormData.append("name", "test")
        
        axios({
            method: "POST",
            url: "https://my-json-server.typicode.com/tsimnujhawj/form-app",
            data: bodyFormData
        })
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    fetchData()
    {
        // grab data from...
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            this.setState({
                data: res.data
            })
            console.log(this.state.data)
        })
    }

    componentDidMount()
    {
        this.fetchData();
    }

    render()
    {
        const data = this.state.data;
        if (data == null)
        {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    return (
        <div>
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
        <ul>
            {data.map((item, index) => <li key={index}>{item.title} | {item.body}</li>)}
        </ul>
        </div>
    )
    }
}
