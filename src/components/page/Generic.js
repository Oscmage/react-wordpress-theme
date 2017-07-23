import React, { Component } from "react";

class Generic extends Component {
  render() {
    console.log("Loaded generic");
    return (
      <div className="App">
        {this.props.title}
      </div>
    );
  }
}

export default Generic;
