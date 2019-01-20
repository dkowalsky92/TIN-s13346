import React from "react";

class Email extends React.Component {
  render() {
    return (
      <div>
        <label>Email: {this.props.email} </label>
      </div>
    );
  }
}

export default Email;
