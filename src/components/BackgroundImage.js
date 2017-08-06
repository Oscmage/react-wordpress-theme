import React, { Component } from "react";

export default class backgroundImage extends Component {
  render() {
    const { url, cssClass } = this.props;

    return (
      <div
        className={cssClass}
        style={{ backgroundImage: "url(" + url + ")" }}
      />
    );
  }
}
