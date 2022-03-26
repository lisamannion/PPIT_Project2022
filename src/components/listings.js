import React from 'react'
import Horses from './horses';
import axios from 'axios';

export class Listings extends React.Component {

    // lifecycle method
    componentDidMount() {
        // get product information from own api
        axios.get('http://localhost:4000/horses')
            .then((response) => {
                this.setState({ horses: response.data, filterData: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    state = {
        horses: [],
        filterData: []
    };

    // filterdata using horses state and update filterData state after filtering
    filterData = (e) => {
        // if selectedIndex from dropdownmenu is between 2 to 6 (inclusive), filter by gender
        if(e.target.selectedIndex >= 2 && e.target.selectedIndex <=6) {
            var filteredData = this.state.horses.filter((horse)=> {
                return horse.gender === e.target.value
            })
        }
        // else if selectedIndex from dropdownmenu is greater or equal than 8, filter by discipline
        else if(e.target.selectedIndex >= 8) {
            filteredData = this.state.horses.filter((horse)=> {
                return horse.discipline === e.target.value
            })
        }
        // else show all horses
        else {
            filteredData = this.state.horses
        }
        this.setState({
            ...this.state,
            filterData: filteredData
        })
    }
    
    render() {
        return(
            <div>
                {/* Message */}
                <div className="form-group">
                    <h2 className="header">Horse(s) in database</h2>
                    {/* create dropdownmenu for filtering */}
                    <select onChange={this.filterData}>
                        <option value="All">Filter By Gender or Discipline</option>
                        <option disabled>──────Gender──────</option>
                        <option value="Colt">Colt</option>
                        <option value="Filly">Filly</option>
                        <option value="Gelding">Gelding</option>
                        <option value="Mare">Mare</option>
                        <option value="Stallion">Stallion</option>
                        <option disabled>─────Discipline─────</option>
                        <option value="All Rounder">All Rounder</option>
                        <option value="Cross Country">Cross Country</option>
                        <option value="Dressage">Dressage</option>
                        <option value="Eventing">Eventing</option>
                        <option value="Hunter">Hunter</option>
                        <option value="School Master">School Master</option>
                        <option value="Showing">Showing</option>
                        <option value="Showjumping">Showjumping</option>
                        <option value="Western">Western</option>
                    </select>
                </div>
                {/* output horses according to filtered data */}
                <Horses horses={this.state.filterData}></Horses>
            </div>
        )
    }    
}