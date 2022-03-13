import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export class CreateAd extends React.Component {

    constructor() {
        super();
        // Bindings
        this.handleAddHorse = this.handleAddHorse.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDiscipline = this.onChangeDiscipline.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.state = {
            name: '',
            type: '',
            discipline: '',
            image: ''
        }
    }
    
    // When registering a new user
    handleAddHorse(event) {
        // Alert the user that the form is being submitted
        alert("Horse Name: " + this.state.name + "\nHorse Type: " + this.state.type + "\nHorse Discipline: " + this.state.discipline + "\nImage URL: " + this.state.image);
        event.preventDefault(); // prevent crashing on reload

        // Create newHorse object
        const newHorse = {
            name: this.state.name,
            type: this.state.type,
            discipline: this.state.discipline,
            image: this.state.image
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
            type: '',
            discipline: '',
            image: ''
        })
    }

    // will set name value in state when input changed
    onChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    // will set type value in state when input changed
    onChangeType(event) {
        this.setState({
            type: event.target.value
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

                        {/* input type */}
                        <div className="form-group">
                            <label>Horse Type</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Horse Type"
                                value={this.state.type}
                                onChange={this.onChangeType}
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

                        <button type="submit" className="btn btn-lg btn-dark btn-block">Add Horse</button>
                    </form>
                </Container>
            </div>
        )
    }    
}