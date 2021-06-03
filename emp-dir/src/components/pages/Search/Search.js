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
            <div className="container">
                <h2>Search for an Employee</h2>
                <form>
                    <label htmlFor="search-input">Employee Name:</label>
                    <input placeholder="Enter Employee name..."/>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default Search;