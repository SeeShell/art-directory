import React from "react";

function TableRow ({quakes}) {
  
    console.log(quakes)

return quakes.map((quake) => {
    return (
      <tr key={quake.id}>
        <td>{quake.properties.mag}</td>
        <td>{quake.properties.place}</td>
        <td>{new Date(quake.properties.time).toLocaleString()}</td>
        <td>{quake.properties.type}</td>
        </tr>
    );
  });
  // return quakes

  return(
    <p>hello</p>
  )
}

export default TableRow;