import React from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import UserAdvert from './userAdvert'
import { Link } from 'react-router-dom';

export class UserAccount extends React.Component {
    constructor() {
        super()
        this.ReloadData = this.ReloadData.bind(this)
        this.state = {
            userExists: false,
            token: '',
            userDetails: [],
            ads: []
        }
    }

    // reload when product deleted
    ReloadData() {
        // get product information from own api
        axios.get('http://localhost:4000/userHorses/' + this.state.userDetails.email)
            .then((response) => {
                this.setState({ ads: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        // Check localStorage for a token
        if (token != null) { // Token found - User is logged in
            // Set userExists variable in state to true
            this.state.userExists = true

            // Set state token
            this.state.token = token
        } else { // Token not found - User not logged in
            // Send an alert to the user to login before they can access the page
            alert("You must be logged in to view this page")

            // Redirect to the loginRegister page
            window.location = '/loginRegister'
        }

        // If the state variable is set to true - User logged in
        if (this.state.userExists) {
            // Need to add logic here for authentication - fix below request, check app.js and server.js routes
            axios.post('http://localhost:4000/validate', this.state)
                .then((res) => {
                    // Store the verified user details in the userDetails state
                    this.setState({ userDetails: res.data.id })
                    document.getElementById("userGreeting").innerHTML = "Hello " + this.state.userDetails.firstName

                    // get product information from own api
                    axios.get('http://localhost:4000/userHorses/' + this.state.userDetails.email)
                        .then((response) => {
                            this.setState({ ads: response.data }) // update state
                        }) // getting http response
                        .catch((error) => {
                            console.log(error);
                        }); // if execption happens
                })
                .catch((err) => {
                    console.log("entered axios error")
                    console.log(err)
                })
        }
    }

    render() {
        return (
            <div className='userInfo-container'>
                <h1>Account information and Active Ads for {this.state.userDetails.firstName}</h1>
                <h2>User Information</h2>
                <Table className='userInfo'>
                    <tbody>
                        <tr>
                            <td><p><b>First Name: </b>{this.state.userDetails.firstName}</p></td>
                            <td><p><b>Surname: </b>{this.state.userDetails.surname}</p></td>
                            <td><p><b>Email Address: </b>{this.state.userDetails.email}</p></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="ads">
                    <h2>Active Ads</h2>
                    <div className='cards-grid'>
                        <UserAdvert horses={this.state.ads} ReloadData={this.ReloadData}></UserAdvert>
                    </div>
                    <div className="create-ads">
                        {/* button for create an ad*/}
                        <Link to={"/createAd"} className="btn btn-primary create-ads-btn">Click Here to create an ad!</Link>
                    </div>
                </div>
            </div>   
        )
    }
}