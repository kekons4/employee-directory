import React from 'react';
import "./filter.css";

function Filter(props) {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="search-input">Employee:</label>
                    <input onChange={props.handleInputChange} placeholder="Enter Employee name..."/>
                    <button onClick={props.handleSubmitChange}>Search</button>
                </div>
                <select>
                    <option>filter</option>
                    <option>Test 2</option>
                </select>
            </form>
            <button onClick={props.btnClick}>Search</button>
        </div>
    );
}

export default Filter;