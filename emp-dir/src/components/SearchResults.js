import React from 'react';
import "./searchResults.css";

function SearchResults(props) {
    if(props.result) {
        console.log(props.result);
        return (
            <tbody>
                    <tr>
                        <td>{props.result.login.uuid}</td>
                        <td>{props.result.name.first + " " + props.result.name.last}</td>
                        <td>{props.result.gender}</td>
                        <td>{props.result.email}</td>
                        <td>{`${props.result.location.street.number} ${props.result.location.street.name}`}</td>
                        <td>{props.result.login.username}</td>
                        <td>{props.result.login.md5}</td>
                        <td>{props.result.dob.date}</td>
                    </tr>);
                )
            </tbody>
        );
    }

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