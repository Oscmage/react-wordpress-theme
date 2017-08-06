import React, { Component } from "react";

export default class PageContent extends Component {
  render() {
    const { content } = this.props;

    return (
      <div
        className="text-content col-xs-12 col-sm-12 col-md-8 col-lg-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}
