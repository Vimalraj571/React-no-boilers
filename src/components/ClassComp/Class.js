import react from "react";

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // super - parent class to child class
    super(props);
    this.state = {
      count: 0,
    };
    // bind - accesing the method in diff context
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Inc</button>
      </div>
    );
  }
}

export default Counter;
