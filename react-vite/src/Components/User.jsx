import React, { Component } from 'react'

class User extends Component {
    constructor() {
        super();
        this.state = {
            name: "ABC",
            age: 25,
            city: "BBSR"
        }
    }
    handleclick = () => {
        let usn = prompt("Enter new user name");
        if (usn !== null && usn !== "") {
            this.setState({ name: usn });
            console.log("Button Clicked")
        }
    }

    render() {
        console.log("Re-render happend.......");
        return (
            <>
                <h1>User Input : {this.state.name}</h1>
                <button onClick={this.handleclick}>Change User</button>
            </>
        )
    }
}

export default User
