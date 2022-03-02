import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export class LoginRegister extends React.Component {
    constructor() {
        super();
        // bind
        this.handleRegSubmit = this.handleRegSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            firstName: '',
            surname: '',
            email: '',
            password: ''
        }
    }

    handleRegSubmit(event) {
        alert("First Name: " + this.state.firstName + "\nSurname: " + this.state.surname + "\nEmail: " + this.state.email + "\nPassword: " + this.state.password);
        event.preventDefault(); // prevent crashing

        // create newUser object
        const newUser = {
            firstName: this.state.firstName,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/loginRegister', newUser) // send newUser object to server
            .then((res) => {
                console.log(res); // response to console
            })
            .catch((err) => {
                console.log(err); // error to console
            });
        // set state to empty for another user
        this.setState ({
            firstName: '',
            surname: '',
            email: '',
            password: ''
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
                            <form>
                                <h3>Login</h3>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
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