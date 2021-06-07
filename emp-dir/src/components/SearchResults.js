import React from 'react';
import "./searchResults.css";

function SearchResults(props) {
    console.log(props.results);
    return (
        <tbody>
            {/* {props.results.results.map(x => {
                <tr>
                    <td>
                        x.gender
                    </td>
                </tr>
            })} */}
            <tr>
                <td>{props.results.results[0].login.uuid}</td>
                <td>{props.results.results[0].name.first + " " + props.results.results[0].name.last}</td>
                <td>{props.results.results[0].gender}</td>
                <td>{props.results.results[0].email}</td>
                <td>{`${props.results.results[0].location.street.number} ${props.results.results[0].location.street.name}`}</td>
                <td>{props.results.results[0].login.username}</td>
                <td>{props.results.results[0].login.md5}</td>
                <td>{props.results.results[0].dob.date}</td>
            </tr>
        </tbody>
    );
}

export default SearchResults;