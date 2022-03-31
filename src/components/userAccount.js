import React from 'react'
import axios from 'axios'

export class UserAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            userExists: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log("User Account Page")

        // Check localStorage for a token
        if (token != null) { // Token found - User is logged in
            console.log("Token Found")
            // Set userExists variable in state to true
            this.state.userExists = true
        } else { // Token not found - User not logged in
            // Send an alert to the user to login before they can access the page
            alert("You must be logged in to view this page")

            // Redirect to the loginRegister page
            window.location='/loginRegister'
        }

        if (this.state.userExists) {
            console.log('Entered user exists')
            // Need to add logic here for authentication - fix below request, check app.js and server.js routes
            // axios.post('http://localhost:4000/validate', this.state)
            // .then((res) => { 
            //     console.log("entered axios response")
            //     console.log(res)
            // })
            // .catch((err) => {
            //     console.log("entered axios error")
            //     console.log(err)
            // })
        }
    }

    render() {
        return (
            <h1>UserAccount details here</h1>
        )
    }
}