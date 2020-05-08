import React from "react";

function Container(props) {
  return (
    <>
    <h1>earthquakes around the world in the last 24hrs</h1>
        <div style={{ width: "100%" }}>
          <label>
            Search:{" "}
            <input
              type="text"
              value={props.search}
              onChange={props.handleSearchChange}
            />
          </label>
        </div>
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
    </>
  );
}

export default Container;
