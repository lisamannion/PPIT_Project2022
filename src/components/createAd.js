import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export class CreateAd extends React.Component {

    constructor() {
        super();
        // Bindings
        this.handleAddHorse = this.handleAddHorse.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.onChangeDiscipline = this.onChangeDiscipline.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.state = {
            name: '',
            age: '',
            height: '',
            gender: '',
            breed: '',
            discipline: '',
            image: '',
            price: ''
        }
    }
    
    // When registering a new user
    handleAddHorse(event) {
        // Alert the user that the form is being submitted
        alert("Horse Name: " + this.state.name + "\n Advert has been created");
        event.preventDefault(); // prevent crashing on reload

        // Create newHorse object
        const newHorse = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            gender: this.state.gender,
            breed: this.state.breed,
            discipline: this.state.discipline,
            image: this.state.image,
            price: this.state.price
        }

        // Sending post request to the server
        axios.post('http://localhost:4000/addHorse', newHorse) // send newUser object to server
            .then((res) => {
                console.log(res); // response to console
            })
            .catch((err) => {
                console.log(err); // error to console
            });

        // set state to empty for the next user
        this.setState({
            name: '',
            age: '',
            height: '',
            gender: '',
            breed: '',
            discipline: '',
            image: '',
            price: ''
        })
    }

    // will set name value in state when input changed
    onChangeName(event) {
        this.setState({
            name: event.target.value
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
                    <form onSubmit={this.handleAddHorse}>
                        <h3>Advertise your horse!</h3>

                        {/* input horse name */}
                        <div className="form-group">
                            <label>Horse name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Horse Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>

                        {/* Input for age */}
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Age"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                            />
                        </div>

                        {/* Input for height */}
                        <div className="form-group">
                            <label>Height</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Height, cm or hh"
                                value={this.state.height}
                                onChange={this.onChangeHeight}
                            />
                        </div>

                        {/* Input for gender */}
                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Gender"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                            />
                        </div>

                        {/* input for breed */}
                        <div className="form-group">
                            <label>Horse Breed</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter breed"
                                value={this.state.breed}
                                onChange={this.onChangeBreed}
                            />
                        </div>

                        {/* input discipline */}
                        <div className="form-group">
                            <label>Horse Dicipline</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Discipline"
                                value={this.state.discipline}
                                onChange={this.onChangeDiscipline}
                            />
                        </div>

                        {/* input image */}
                        <div className="form-group">
                            <label>Horse Image</label>
                            <textarea type="text"
                                className="form-control"
                                placeholder="Add Image Url"
                                value={this.state.image}
                                onChange={this.onChangeImage}
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

                        <button type="submit" className="btn btn-lg btn-dark btn-block">Add Horse</button>
                    </form>
                </Container>
            </div>
        )
    }    
}