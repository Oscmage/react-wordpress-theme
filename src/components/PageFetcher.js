import React, { Component } from "react";

import { connect } from "react-redux";

import { requestPage } from "./../Actions";
import PageTemplateSwitcher from "./PageTemplateSwitcher";

const getSlugFromLocation = location => {
  return location.pathname.slice(1, -1);
};

class PageFetcher extends Component {
  getPage = props => {
    const slug = getSlugFromLocation(props.location);

    this.props.onRequestPage(slug);
  };

  componentWillMount() {
    this.getPage(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.getPage(newProps);
    }
  }

  render() {
    const { id } = this.props;
    const isLoading = !id;

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <div className="Page">
        <PageTemplateSwitcher pageId={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  id: state.pages.slugsToId[getSlugFromLocation(props.location)]
});

const mapDispatchToProps = dispatch => ({
  onRequestPage: slug => dispatch(requestPage(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageFetcher);
