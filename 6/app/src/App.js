import React, { Component } from "react";
import ReactDOM from "react-dom";
import Name from "./component/name";
import Email from "./component/email";
import Age from "./component/age";
import Form from "./component/form";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      age: 0
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
    this.setState({
      name: e.target.name,
      email: e.target.email,
      age: e.target.age
    });
  };

  // onInput = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  render() {
    console.log(this.state);
    const { name, email, age } = this.state;
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <Name name={name} />
        <Email email={email} />
        <Age age={age} />
      </div>
    );
  }
}
