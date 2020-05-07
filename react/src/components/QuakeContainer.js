import React, { Component } from "react";
import Container from "./Container";
import Table from "./Table";
import TableRows from "./TableRows";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class QuakeContainer extends Component {
  state = {
    quakes: [],
  };

  componentDidMount() {
    let date = new Date();
    let ISOdate = date.toISOString().split("T")[0];
    console.log(ISOdate);
    this.searchQuakes(ISOdate);
  }

  searchQuakes = (query) => {
    return API.search(query)
      .then((res) => this.setState({ quakes: res.data.features }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    console.log(this.state.result);
    // let utcTOdate = this.state.result.features;
    // .properties.time.toDateString;
    // console.log(utcTOdate);
    return (
      <Container>
        <p>Hello, world</p>
        <Table>
          <TableRows quakes={this.state.quakes} />
        </Table>
      </Container>
    );
  }
}

export default QuakeContainer;
