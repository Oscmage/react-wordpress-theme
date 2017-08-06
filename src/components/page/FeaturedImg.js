import React, { Component } from "react";

export default class FeaturedImage extends Component {
  render() {
    const { featuredImage } = this.props;

    return (
      <div
        className="feature-img"
        style={{ backgroundImage: "url(" + featuredImage.source_url + ")" }}
      />
    );
  }
}
