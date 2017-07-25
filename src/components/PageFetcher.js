import React, { Component } from "react";

import { connect } from "react-redux";

import { getSlugFromLocation } from "./../helpers/Slug";
import { requestGenericPage } from "./../Actions";
import PageTemplateSwitcher from "./PageTemplateSwitcher";
import styled from "styled-components";
import "./../style/spinner.scss";

class PageFetcher extends Component {
  componentWillMount() {
    this.props.onRequestPage(this.props.location);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.props.onRequestPage(newProps.location);
    }
  }

  render() {
    const { id, loading } = this.props;

    if (!id || loading) {
      return (
        <div className="loader">
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__ball" />
        </div>
      );
    }

    return (
      <PageContent>
        <PageTemplateSwitcher pageId={id} />
      </PageContent>
    );
  }
}

const mapStateToProps = (state, props) => ({
  id: state.pages.slugsToId[getSlugFromLocation(props.location)]
});

const mapDispatchToProps = dispatch => ({
  onRequestPage: location => dispatch(requestGenericPage(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageFetcher);

const PageContent = styled.div`flex: 1;`;
