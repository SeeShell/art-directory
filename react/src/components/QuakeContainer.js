import React, { Component } from "react";
import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class QuakeContainer extends Component {
  state = {
    result: {},
    // search: "",
  };

  componentDidMount() {
    this.searchArt("2020-05-07");
  }

  searchArt = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
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
    console.log(this.state.result)
    return (
      <Container>
        <p>Hello, world</p>
      </Container>
   
    );
  }
}

export default QuakeContainer;
