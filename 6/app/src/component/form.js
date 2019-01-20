import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="name..."
            value={this.props.name}
            //onChange={this.props.onInput}
            ref={input => (this.name = input)}
          />
          <br />
          <label>Email: </label>
          <input
            name="email"
            type="text"
            placeholder="email..."
            value={this.props.email}
            //onChange={this.props.onInput}
            ref={input => (this.email = input)}
          />
          <br />
          <label>Age: </label>
          <input
            name="age"
            type="number"
            placeholder="age..."
            value={this.props.age}
            //onChange={this.props.onInput}
            ref={input => (this.age = input)}
          />
          <br />
          <input name="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
