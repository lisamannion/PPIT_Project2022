import React from 'react'
import Horses from './horses'
import axios from 'axios'


export class ViewAd extends React.Component {
    // ViewAd constructor
    constructor() {
        super()
        // bind
        // this.ReloadData = this.ReloadData.bind(this)

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
        // console.log(this.params.id)
        // Get information from the server
        axios.get('http://localhost:4000/horses/622fb6365a15c8adeeb1fb37')
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
                <div className="form">
                    <h4>{this.state.height}</h4>
                </div>
                {/*  <Horses horses={this.state.horses}></Horses> */}
                {/*<Horses horses={this.state.horses} ReloadData={this.ReloadData}></Horses> */}
            </div>
        )
    }
}