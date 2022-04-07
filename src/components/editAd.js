import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export class EditAd extends React.Component {

    constructor() {
        super();
        this.id = window.location.pathname.substring(6)
        // Bindings
        this.handleEdit = this.handleEdit.bind(this);
        this.onChangeAdName = this.onChangeAdName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.onChangeDiscipline = this.onChangeDiscipline.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.state = {
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
            contactEmail: '',
            _id: ''
        }
    }

    componentDidMount() {

        console.log(this.id)
        // read from database
        axios.get('http://localhost:4000/horses/' + this.id)
            .then(response => {
                this.setState({
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
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // When registering a new user
    handleEdit(event) {
        // Alert the user that the form is being submitted
        alert("Horse Name: " + this.state.adName + "\nAdvert has been edited");
        event.preventDefault(); // prevent crashing on reload

        // Create newHorse object
        const newHorse = {
            adName: this.state.adName,
            age: this.state.age,
            height: this.state.height,
            gender: this.state.gender,
            breed: this.state.breed,
            discipline: this.state.discipline,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            contactName: this.state.contactName,
            contactEmail: this.state.contactEmail,
            _id: this.state._id
        }

        // Sending post request to the server
        axios.put('http://localhost:4000/editHorse/' + this.state._id, newHorse) // send newUser object to server
            .then((res) => {
                console.log(res); // response to console
                window.location='/userAccount'
            })
            .catch((err) => {
                console.log(err); // error to console
            });
    }

    // will set name value in state when input changed
    onChangeAdName(event) {
        this.setState({
            adName: event.target.value
        })
    }

    // Changing Age
    onChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    // Setting the height
    onChangeHeight(event) {
        this.setState({
            height: event.target.value
        })
    }

    // Set state of gender
    onChangeGender(event) {
        this.setState({
            gender: event.target.value
        })
    }

    // will set breed value in state when input changed
    onChangeBreed(event) {
        this.setState({
            breed: event.target.value
        })
    }

    // will set discipline value in state when input changed
    onChangeDiscipline(event) {
        this.setState({
            discipline: event.target.value
        })
    }

    // will set image url value in state when input changed
    onChangeImage(event) {
        this.setState({
            image: event.target.value
        })
    }

    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    // Set the price of the horse
    onChangePrice(event) {
        this.setState({
            price: event.target.value
        })
    }

    render() {
        return(
            <div>
                <Container>
                    {/* create add horse form */}
                    <form onSubmit={this.handleEdit}>
                        <h3>Edit your horse!</h3>

                        {/* input horse name */}
                        <div className="form-group">
                            <label>Title of Ad</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter title here"
                                value={this.state.adName}
                                onChange={this.onChangeAdName}
                            />
                        </div>

                        {/* Input for age */}
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Age"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                            />
                        </div>

                        {/* Input for height */}
                        <div className="form-group">
                            <label>Height</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Height, cm or hh"
                                value={this.state.height}
                                onChange={this.onChangeHeight}
                            />
                        </div>

                        {/* Input for gender */}
                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" className="form-control"
                                 onChange={this.onChangeGender}>
                                <option value="Colt">Colt</option>
                                <option value="Filly">Filly</option>
                                <option value="Gelding">Gelding</option>
                                <option value="Mare">Mare</option>
                                <option value="Stallion">Stallion</option>
                            </select>
                        </div>

                        {/* input for breed */}
                        <div className="form-group">
                            <label>Breed</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter breed"
                                value={this.state.breed}
                                onChange={this.onChangeBreed}
                            />
                        </div>

                        {/* input discipline */}
                        <div className="form-group">
                            <label>Discipline</label>
                            <select name="discipline" className="form-control"
                                 onChange={this.onChangeDiscipline}>
                                <option value="All Rounder">All Rounder</option>
                                <option value="Cross Country">Cross Country</option>
                                <option value="Dressage">Dressage</option>
                                <option value="Eventing">Eventing</option>
                                <option value="Hunter">Hunter</option>
                                <option value="School Master">School Master</option>
                                <option value="Showing">Showing</option>
                                <option value="Showjumping">Showjumping</option>
                                <option value="Western">Western</option>
                                <option value="Not specified">Not specified</option>
                            </select>
                        </div>

                        {/* input image */}
                        <div className="form-group">
                            <label>Image</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Add Image Url"
                                value={this.state.image}
                                onChange={this.onChangeImage}
                            />
                        </div>

                        {/* input image */}
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text"
                                className="form-control"
                                placeholder="Add description here"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>

                        {/* Input for price */}
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Price"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />
                        </div>

                        {/* Contact Name */}
                        <div className="form-group">
                            <label>Contact Name</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.contactName}
                                disabled
                            />
                        </div>

                        {/* Contact Email */}
                        <div className="form-group">
                            <label>Contact Email</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.contactEmail}
                                disabled
                            />
                        </div>

                        <button type="submit" className="btn btn-lg btn-dark btn-block">Edit Ad</button>
                    </form>
                </Container>
            </div>
        )
    }
}