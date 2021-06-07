import React, { useState, useEffect } from 'react';
import API from '../../../utils/API';
import './Search.css';

function Search() {
    const [searchState, setSearchState] = useState([]);
    const [inputState, setInputState] = useState({
        query: "",
        results: []
    });

    useEffect(() => {

        if(!searchState) return;

        API.employeeResults()
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                setSearchState(res.data);
                console.log(searchState);
            })
            .catch(err => console.error(err));
    }, [searchState]);

    const handleInputChange = event => {
        setInputState({query: event.target.value});
    };

    return (
        <div className="container">
            <form>
                <div>
                    <label htmlFor="search-input">Employee:</label>
                    <input placeholder="Enter Employee name..."/>
                    <button>Search</button>
                </div>
                <select>
                    <option>filter</option>
                    <option>Test 2</option>
                </select>
            </form>
            <br/>
            <table>
                <tr>
                    <th>ID:</th>
                    <th>Name:</th>
                    <th>Gender:</th>
                    <th>Email:</th>
                    <th>Address:</th>
                    <th>Username:</th>
                    <th>Password:</th>
                    <th>DoB:</th>

                </tr>
                <tr>
                    <td>01</td>
                    <td>Keon Pourboghrat</td>
                    <td>Male</td>
                    <td>kekons4@gmail.com</td>
                    <td>4887 Chaddington Dr., Dublin Ohio 43017</td>
                    <td>kekons4</td>
                    <td>fd$34jksdfg*$jk45$#</td>
                    <td>01-19-1995</td>
                </tr>
            </table>
        </div>
    );
}

export default Search;