import React from 'react';
import "./filter.css";

function Filter(props) {
    return(
        <section>
            <div>
                <label htmlFor="search-input">Employee:</label>
                <input onChange={props.handleInputChange} placeholder="Enter First or Last name..."/>
                <button onClick={props.btnClick}>Search</button>
                <button className="reset" onClick={props.resetFilter}>Reset</button>
            </div>
            <select>
                <option>filter</option>
                <option>Test 2</option>
            </select>
        </section>
    );
}

export default Filter;