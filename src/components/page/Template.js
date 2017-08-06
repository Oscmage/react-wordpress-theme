import React, { Component } from "react";

export default class Template extends Component {
  render() {
    const { page } = this.props;

    return (
      <div className="App">
        klsdkljaksdljaslkd
        {page.title.rendered}
      </div>
    );
  }
}
