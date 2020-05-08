import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div className="container"> 
    <h2 className="title">earthquakes around the world in the last 24hrs</h2>
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
    </div>
  );
}

export default Container;
