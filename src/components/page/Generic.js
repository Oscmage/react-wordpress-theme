import React, { Component } from "react";

export default class Generic extends Component {
  render() {
    const { page } = this.props;
    const featuredImageSrc = page.better_featured_image.source_url;

    if (featuredImageSrc) {
      return (
        <div className="App">
          <div
            className="feature-img"
            style={{ backgroundImage: "url(" + featuredImageSrc + ")" }}
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
