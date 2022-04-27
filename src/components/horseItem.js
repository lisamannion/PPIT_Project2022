import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// create class HorseItem to show adverts
class HorseItem extends Component {

    render() {
        return (
            // get every element and put into card using bootstrap
            <div className="cardListings">
                {/* set border, backgound colour and width */}
                <Card border="secondary" bg="light" style={{ height: '30rem', width: '50rem' }}>
                    <Card.Header><b>{this.props.horse.adName}</b></Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.horse.image} className="cardImg" style={{ height: '15rem' }} alt="horse image"></img>
                            <footer>
                                Gender: {this.props.horse.gender} <br></br>
                                Discipline: {this.props.horse.discipline} <br></br>
                                Price: €{this.props.horse.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* button to details of horse by changing url with specific id*/}
                    <Link to={"/horses/" + this.props.horse._id} className="btn btn-primary">Details</Link>
                </Card>
            </div>
        )
    }
}

export default HorseItem; // export