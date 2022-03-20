import React from 'react'
import axios from 'axios'


export class ViewAd extends React.Component {
    // ViewAd constructor
    constructor() {
        super()
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
            price: ''
        }
    }

    // lifecycle method
    componentDidMount() {
        console.log(this.id)
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
                    price: response.data.price
                })
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    render() {
        return (
            <div>
                {/* message with horses listed */}
                <div>
                    <table className='advert' border='1'>
                        <tr>
                            <th colSpan={3} rowSpan={7}><img src={this.state.image} width='500'></img></th>
                            <th colSpan={5}><h2>{this.state.adName}</h2><hr></hr></th>
                        </tr>
                        <tr>
                            <td><b>AGE: </b>{this.state.age}</td>
                            <td colSpan={2}><b>SEX: </b>{this.state.gender}</td>
                            <td colSpan={2}><b>HEIGHT: </b>{this.state.height}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}><b>BREED: </b>{this.state.breed}</td>
                            <td colSpan={2}><b>DISCIPLINE: </b>{this.state.discipline}</td>
                        </tr>
                        <tr>
                            <td colspan={5}>{this.state.description}</td>
                        </tr>
                        <tr>
                            <td colspan={5}><hr></hr><b>PRICE:</b> {this.state.price}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}