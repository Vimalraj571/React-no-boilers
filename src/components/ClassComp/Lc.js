// Life Cycle of Component
import React from "react";


// 1.componentDidMount
// 2.shouldComponentUpdate
// 3.componentDidUpdate

class Test extends React.Component {
  constructor(props) {
    super(props);
    // Inherite props from parent
    this.state = { hello: "World!" };
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    // State Change Rerender
    this.setState({ hello: "This is Change State!" });
  }

  render() {
    return (
      <div>
        <h1>Test Heading{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Click Here!</a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default Test;
