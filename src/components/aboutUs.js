import React from 'react'

// AboutUs Component - static
export class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-wrap">
                <div className="about-inner">
                    <img src="about.jpg" alt="backgound-image" />
                    <div className="about-caption text-center">
                        <h1>About Us</h1>
                        <h3>
                            ManeDealR was founded in 2022. We provide an online
                            advertising platform to allow people to find Horses
                            as well as promoting horses by creating an advertisement
                            through our website. Our aim is to use modern technology
                            to make buying and selling horse easier.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}