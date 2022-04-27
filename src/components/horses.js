import React, { Component } from 'react';
import HorseItem from './horseItem';

// Horses maps each horse returned from results to a HorseItem
class Horses extends Component {
    render() {
        // get products and map to individual element (product)
        return this.props.horses.map((horse) => {
            return <HorseItem horse={horse} key={horse._id}></HorseItem>
        });
    }
}

export default Horses; // export