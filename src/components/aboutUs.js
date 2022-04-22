import React from 'react'

export class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-wrap">
                <div className="about-inner">
                    <img src="about.jpg" alt="backgound-image" />
                    <div className="about-caption text-center">
                        <h1>About Us</h1>
                        <h3>
                            Description here
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}