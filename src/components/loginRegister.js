import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export class LoginRegister extends React.Component {
    constructor() {
        super();
        // Bindings
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.onChangeLogEmail = this.onChangeLogEmail.bind(this);
        this.onChangeLogPassword = this.onChangeLogPassword.bind(this);
        this.handleRegSubmit = this.handleRegSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            logEmail: '',
            logPassword: '',
            firstName: '',
            surname: '',
            email: '',
            password: '',
            token: ''
        }
    }

    // When the user tries to login after filling the form
    handleLoginSubmit(event) {
        event.preventDefault(); // prevent crashing on reload 

        // Defining a new user object
        const user = {
            logEmail: this.state.logEmail,
            logPassword: this.state.logPassword
        }

        // Sending post request to the server
        axios.post('http://localhost:4000/login', user)
            .then((res) => { // If sucessful
                if (res.data.token) { // If there is a token in response
                    // Store the response data
                    let response = res.data

                    // Store the token from the reponse in local storage
                    localStorage.setItem('token', response.token)

                    // Store the token in state
                    this.state.token = localStorage.getItem('token')

                    // Send an alert to the user to notify successful login
                    alert("You have successfully logged in")

                    // // Redirect the user to user account information page
                    window.location='/userAccount'
                    // Not sure if this is needed here
                    // axios.post('http://localhost:4000/userAccount')
                    //     .then((res) => { // If token valid, user is redirected to the user page
                            
                    //     })
                    //     .catch((err) => {
                    //         console.log(err)
                    //     })
                } else {
                    document.getElementById('loginError').hidden = false
                }          
            })
            .catch((err) => { // If there are errors
                console.log(err);
            })
    }

    // When registering a new user
    handleRegSubmit(event) {
        // Alert the user that the form is being submitted
        alert("First Name: " + this.state.firstName + "\nSurname: " + this.state.surname + "\nEmail: " + this.state.email + "\nPassword: " + this.state.password);
        event.preventDefault(); // prevent crashing on reload

        // Create newUser object
        const newUser = {
            firstName: this.state.firstName,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        }

        // Sending post request to the server
        axios.post('http://localhost:4000/register', newUser) // send newUser object to server
            .then((res) => {
                console.log(res); // response to console
            })
            .catch((err) => {
                console.log(err); // error to console
            });

        // set state to empty for the next user
        this.setState({
            firstName: '',
            surname: '',
            email: '',
            password: ''
        })
    }

    // will change logEmail value in state when input changed
    onChangeLogEmail(event) {
        this.setState({
            logEmail: event.target.value
        })
    }

    // will set logPassword value in state when input changed
    onChangeLogPassword(event) {
        this.setState({
            logPassword: event.target.value
        })
    }

    // will change firstName value in state when input changed
    onChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    // will set surname value in state when input changed
    onChangeSurname(event) {
        this.setState({
            surname: event.target.value
        })
    }

    // will set email value in state when input changed
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    // will set password value in state when input changed
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <Container className='login-container'>
                <Row>
                    <Col>
                        <div>
                            {/* create login form */}
                            <form onSubmit={this.handleLoginSubmit}>
                                <h3>Login</h3>
                                    <h6 id='loginError' hidden={true}>Please check login details and try again</h6>
                                {/* input login email */}
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={this.state.logEmail}
                                        onChange={this.onChangeLogEmail}
                                        required
                                    />
                                </div>

                                {/* input login password */}
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={this.state.logPassword}
                                        onChange={this.onChangeLogPassword}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        {/* create register form */}
                        <form onSubmit={this.handleRegSubmit}>
                            <h3>Register</h3>

                            {/* input first name */}
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                    required
                                />
                            </div>

                            {/* input surname */}
                            <div className="form-group">
                                <label>Surname</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={this.state.surname}
                                    onChange={this.onChangeSurname}
                                    required
                                />
                            </div>

                            {/* input email */}
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    required
                                />
                            </div>

                            {/* input password */}
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    minLength="8"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-lg btn-dark btn-block">Register</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}