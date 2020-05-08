import React from "react";

function Table(props){
    return(
        <table className="table">
    <thead>
        <tr>
            <th>Magnitude<span type="button" onClick={() => {}}>
            ^
          </span></th>
            <th>Place</th>
            <th>Time</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
            {props.children}       
    </tbody>
</table>
    )
}

export default Table;