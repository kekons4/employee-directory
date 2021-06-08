import React from 'react';
import "./searchResults.css";

function SearchResults(props) {
    return (
        <tbody>
            {props.results.map(result => {
                return( <tr>
                    <td>{result.login.uuid}</td>
                    <td>{result.name.first + " " + result.name.last}</td>
                    <td>{result.gender}</td>
                    <td>{result.email}</td>
                    <td>{`${result.location.street.number} ${result.location.street.name}`}</td>
                    <td>{result.login.username}</td>
                    <td>{result.login.md5}</td>
                    <td>{result.dob.date}</td>
                </tr>);
            })}
        </tbody>
    );
}

export default SearchResults;