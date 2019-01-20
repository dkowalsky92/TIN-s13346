import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        <label>Age: {this.props.age} </label>
      </div>
    );
  }
}

export default Age;
