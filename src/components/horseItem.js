import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// create class ProductItem to show product information
class HorseItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            // get every element and put into card using bootstrap
            <div className="card">
                {/* set border, backgound colour and width */}
                <Card border="secondary" bg="light" style={{ height: '30rem' }}>
                    <Card.Header><b>{this.props.horse.adName}</b></Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.horse.image} className="cardImg" style={{ height: '15rem' }}></img>
                            <footer>
                                Age: {this.props.horse.age} <br></br>
                                Discipline: {this.props.horse.discipline} <br></br>
                                Price: €{this.props.horse.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* button for edit/update by changing url with id*/}
                    <Link to={"/"} className="btn btn-primary">Details</Link>
                </Card>
            </div>
        )
    }
}

export default HorseItem; // export