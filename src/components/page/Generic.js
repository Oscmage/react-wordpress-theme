import React, { Component } from "react";

export default class Generic extends Component {
  render() {
    const { page } = this.props;
    const featuredImage = page.better_featured_image;

    if (featuredImage) {
      return (
        <div className="App">
          <div
            className="feature-img"
            style={{ backgroundImage: "url(" + featuredImage.source_url + ")" }}
          >
            {page.content.rendered}
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        {page.content.rendered}
      </div>
    );
  }
}
