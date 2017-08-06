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
          />
          <div
            className="text-content col-xs-12 col-sm-12 col-md-8 col-lg-6"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
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
