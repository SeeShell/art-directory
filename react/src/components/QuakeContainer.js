import React, { Component } from "react";
import Container from "./Container";
import Table from "./Table";
import TableRows from "./TableRows";
import API from "../utils/API";

class QuakeContainer extends Component {
  state = {
    search: "",
    quakes: [],
    filteredQuakes: []
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
      return quake.properties.place.toLowerCase().includes(this.state.search.toLowerCase());
    });
    this.setState({filteredQuakes})
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


  render() {
    return (
      <Container>
        <h1>Earthquakes around the world today</h1>
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
        <Table>
          <TableRows quakes={this.state.filteredQuakes && this.state.filteredQuakes.length ? this.state.filteredQuakes : this.state.quakes} />
        </Table>
      </Container>
    );
  }
}

export default QuakeContainer;
