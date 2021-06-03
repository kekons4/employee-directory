import React from 'react';
import API from '../../../utils/API';
import './Search.css';

class Search extends React.Component {
    state = {
        search: "",
        result: []
    }

    render() {
        return (
            <form className="contianer">
                <label htmlFor="search-input">Search for an Employee</label>
                <input placeholder="Enter Employee name..."/>
                <button>Search</button>
            </form>
        );
    }
}

export default Search;