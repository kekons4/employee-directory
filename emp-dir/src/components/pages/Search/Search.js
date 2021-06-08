import React, { useState, useEffect } from 'react';
import SearchResults from '../../SearchResults';
import Filter from '../../Filter';
import API from '../../../utils/API';
import './Search.css';

function Search() {
    const [searchState, setSearchState] = useState([]);
    const [inputState, setInputState] = useState({
        query: "",
        results: undefined
    });

    useEffect(() => {

        if(searchState.length > 0) return;

        API.employeeResults()
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                // console.log(res.data.results);
                setSearchState(res.data.results);
                // console.log(searchState);
            })
            .catch(err => console.error(err));
    }, [searchState]);

    const handleInputChange = event => {
        setInputState({query: event.target.value});
        console.log(inputState.query);
    };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const test = searchState.map(result => result.gender === inputState.query);
    //     setInputState({results: test});
    //     console.log(inputState.results);
    // };

    const btnClick = () => {
        // console.log(inputState.query);
        const test = searchState.find(result => result.name.first === inputState.query || result.name.last === inputState.query);
        setSearchState([test]);
        console.log(searchState);
    }

    const resetFilter = () => {
        setSearchState([]);
        setInputState({query: ""});
    }

    return (
        <div className="container">
            <Filter
                handleInputChange={handleInputChange}
                btnClick={btnClick}
                resetFilter={resetFilter}
            />
            <br/>
            <table>
                <thead>
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
                </thead>
                <SearchResults
                    results={searchState}
                    // result={inputState.results}
                />
            </table>
        </div>
    );
}

export default Search;