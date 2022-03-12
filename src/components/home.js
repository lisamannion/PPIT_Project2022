import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class Home extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/category.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Horse Category</h3>
                        <p>To be edited</p>
                        <p><a className="btn btn-large btn-outline-light" href="#">Browse by Category</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/discipline.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Horse Discipline</h3>
                        <p>To be edited</p>
                        <p><a className="btn btn-large btn-outline-light" href="#">Browse by Discipline</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-pic" src="/weight.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Horse Size</h3>
                        <p>To be edited</p>
                        <p><a className="btn btn-large btn-outline-light" href="#">Browse by Size</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}