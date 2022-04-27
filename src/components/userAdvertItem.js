import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

// create class HorseItem to show adverts
class UserAdvertItem extends Component {
    constructor() {
        super();
        // bind else will get exception
        this.DeleteHorse = this.DeleteHorse.bind(this);
    }

    DeleteHorse() {
        // delete product with specific id
        axios.delete('http://localhost:4000/deleteHorse/' + this.props.horse._id)
            .then(() => {
                // reload data when product is deleted
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            // get every element and put into card using bootstrap
            <div className="card">
                {/* set border, backgound colour and width */}
                <Card border="secondary" bg="light" style={{ height: '100%' }}>
                    <Card.Header><b>{this.props.horse.adName}</b></Card.Header>
                    <Card.Body>
                        <blockquote style={{ height: '85%' }}>
                            <img src={this.props.horse.image} className="cardImg" style={{ height: '80%', width: '80%' }} alt="horse image"></img>
                            
                        </blockquote>
                        <footer>
                                Discipline: {this.props.horse.discipline}
                        </footer>
                    </Card.Body>
                    {/* button for edit/update by changing url with id*/}
                    <Link to={"/edit/" + this.props.horse._id} className="btn btn-primary">Edit</Link>
                    {/* button for delete */}
                    <Button variant="danger" onClick={this.DeleteHorse}>Delete</Button>
                </Card>
            </div>
        )
    }
}

export default UserAdvertItem; // export