import React from 'react';
import "./filter.css";

function Filter(props) {
    return(
        <section>
            <div>
                <label htmlFor="search-input">Employee:</label>
                <input onChange={props.handleInputChange} placeholder="Username, First or Last name..."/>
                <select onChange={props.handleSelectChange}>
                    <option value={undefined}>filter</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                <button onClick={props.btnClick}>Search</button>
                <button className="reset" onClick={props.resetFilter}>Reset</button>
            </div>
        </section>
    );
}

export default Filter;