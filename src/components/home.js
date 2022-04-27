import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class Home extends React.Component {
    render() {
        return (
            // Code for the Home component 
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/category.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Been looking for your next horse?</h3>
                        <p>Take a look at our listings!</p>
                        <p><a className="btn btn-large btn-outline-light" href="/listings">Click Here</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/discipline.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Want to advertise your horse?</h3>
                        <p>Advertise with us!</p>
                        <p><a className="btn btn-large btn-outline-light" href="/createAd">Create Now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/weight.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>About Us</h3>
                        <p>Want to know more about what we offer and what we do?</p>
                        <p><a className="btn btn-large btn-outline-light" href="/aboutUs">Know More</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}