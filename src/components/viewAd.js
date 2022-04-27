import React from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

export class ViewAd extends React.Component {
    // ViewAd constructor
    constructor() {
        super()
        // Takes the id out of the url
        this.id = window.location.pathname.substring(8)

        this.state = {
            _id: '',
            adName: '',
            age: '',
            height: '',
            gender: '',
            breed: '',
            discipline: '',
            image: '',
            description: '',
            price: '',
            contactName: '',
            contactEmail: ''
        }
    }

    // lifecycle method
    componentDidMount() {
        this.state.token = localStorage.getItem('token')

        // Check localStorage for a token
        if (this.state.token == null) { // Token not found - User not logged in
            // Send an alert to the user to login before they can access the page
            alert("You must be logged in to view this page")

            // Redirect to the loginRegister page
            window.location = '/loginRegister'
        }
        else {
            // Get information from the server
            axios.get('http://localhost:4000/horses/' + this.id)
                .then((response) => {
                    this.setState({ // Set the state of the update fields to the state of the document which came back from database
                        _id: response.data._id,
                        adName: response.data.adName,
                        age: response.data.age,
                        height: response.data.height,
                        gender: response.data.gender,
                        breed: response.data.breed,
                        discipline: response.data.discipline,
                        image: response.data.image,
                        description: response.data.description,
                        price: response.data.price,
                        contactName: response.data.contactName,
                        contactEmail: response.data.contactEmail
                    })
                }) // getting http response
                .catch((error) => {
                    console.log(error);
                }); // if execption happens
        }
    }

    render() {
        return (
            <div>
                {/* message with horses listed */}
                <div className='ad-container'>
                    <Table className='advert' border='1'>
                        <tbody>
                            <tr>
                                <th colSpan={1} rowSpan={7}><img src={this.state.image} width='500'></img></th>
                                <th colSpan={6}><h2>{this.state.adName}</h2><hr></hr></th>
                            </tr>
                            <tr>
                                <td colSpan={2}><b>AGE: </b>{this.state.age}</td>
                                <td colSpan={2}><b>BREED: </b>{this.state.breed}</td>
                                <td colSpan={2}><b>DISCIPLINE: </b>{this.state.discipline}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><b>HEIGHT: </b>{this.state.height}</td>
                                <td colSpan={2}><b>SEX: </b>{this.state.gender}</td>
                                <td colSpan={2}><b>PRICE:</b> {this.state.price}</td>
                            </tr>
                            
                            <tr>
                                <td colSpan={2}><b>CONTACT INFO</b></td>
                                <td colSpan={2}><b>Seller Name: </b>{this.state.contactName}</td>
                                <td colSpan={2}><b>Seller Email: </b>{this.state.contactEmail}</td>
                            </tr>
                            <tr>
                                <td colSpan={4} rowSpan={2}>{this.state.description}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Link to={'/listings'} className="btn btn-primary" style={{margin: 10}}>Back to listings</Link>
                </div>
            </div>
        )
    }
}