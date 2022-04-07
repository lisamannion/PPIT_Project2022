import React, { Component } from 'react';
import UserAdvertItem from './userAdvertItem';

// create class Products with individual products listed
class UserAdvert extends Component {
    render() {
        // get products and map to individual element (product)
        return this.props.horses.map((horse) => {
            return <UserAdvertItem horse={horse} key={horse._id} ReloadData={this.props.ReloadData}></UserAdvertItem>
        });
    }
}

export default UserAdvert; // export