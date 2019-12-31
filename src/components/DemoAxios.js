import React, { Component } from "react";
import axios from "axios";

class DemoAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }
  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => console.log(error))
      .finally(function() {});
  };
  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default DemoAxios;
