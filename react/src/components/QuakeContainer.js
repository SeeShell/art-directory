import React, { Component } from "react";
import Container from "./Container";
import Table from "./Table";
import TableRows from "./TableRows";
import API from "../utils/API";
import orderBy from "lodash/orderBy";

class QuakeContainer extends Component {
  state = {
    search: "",
    quakes: [],
    filteredQuakes: [],
    sortOrder: "asc",
  };

  componentDidMount() {
    let date = new Date();
    let ISOdate = date.toISOString().split("T")[0];
    this.searchQuakes(ISOdate);
  }

  searchQuakes = (query) => {
    return API.search(query)
      .then((res) => this.setState({ quakes: res.data.features }))
      .catch((err) => console.log(err));
  };

  filterQuakes() {
    let filteredQuakes = this.state.quakes.filter((quake) => {
      return quake.properties.place
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
      // return quake.properties.place.match(this.state.search, "gi")
    });
    this.setState({ filteredQuakes });
  }
  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
    this.filterQuakes();
  };
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSort = () => {
      this.setState({
          filteredQuakes: orderBy(
            this.state.quakes,
            [(quake) => quake.properties.mag],
            [this.state.sortOrder === "asc" ? "desc" : "asc"]
          ),
        })

    this.state.sortOrder === "asc"
      ? this.setState({ sortOrder: "desc" })
      : this.setState({ sortOrder: "asc" });
  };

  render() {
    return (
      <Container>
        <h1>earthquakes around the world in the last 24hrs</h1>
        <div style={{ width: "100%" }}>
          <label>
            Search:{" "}
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </label>
        </div>
        <Table handleSort={this.handleSort}>
          <TableRows
            quakes={
              this.state.filteredQuakes && this.state.filteredQuakes.length > 0
                ? this.state.filteredQuakes
                : this.state.quakes
            }
          />
        </Table>
      </Container>
    );
  }
}

export default QuakeContainer;
