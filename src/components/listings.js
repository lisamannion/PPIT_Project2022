import React from 'react'
import Horses from './horses';
import axios from 'axios';

export class Listings extends React.Component {
    
    constructor() {
        super();
        // bind
        this.ReloadData = this.ReloadData.bind(this);
    }

    // reload when product deleted
    ReloadData() {
        // get product information from own api
        axios.get('http://localhost:4000/horses')
            .then((response) => {
                this.setState({ horses: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    // lifecycle method
    componentDidMount() {
        // get product information from own api
        axios.get('http://localhost:4000/horses')
            .then((response) => {
                this.setState({ horses: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    state = {
        horses: []
    };
    
    render() {
        return(
            <div>
                {/* message with horses listed */}
                <div className="form">
                    <h2 className="header">Horse(s) in database</h2>
                </div>
                <Horses horses={this.state.horses} ReloadData={this.ReloadData}></Horses>
            </div>
        )
    }    
}