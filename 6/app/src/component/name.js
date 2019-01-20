import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>Name: {this.props.name} </label>
      </div>
    );
  }
}

export default Name;
