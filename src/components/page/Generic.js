import React, { Component } from "react";

export default class Generic extends Component {
  render() {
    const { page } = this.props;

    return (
      <div className="App">
        {page.title.rendered}
      </div>
    );
  }
}
