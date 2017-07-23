import React, { Component } from "react";

import { connect } from "react-redux";

import { receivedPage } from "./../Actions";
import Generic from "./page/Generic";
import jsonRequest from "./../helpers/fetch";

class PageFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null
    };
  }

  getSlug = path => {
    return path.slice(1, -1);
  };

  getPage = props => {
    const path = this.getSlug(props.location.pathname);

    jsonRequest("/wp-json/wp/v2/pages?slug=" + path)
      .then(page => {
        console.log(page);
        this.props.onReceivedpage(page[0]);
        this.setState({ loading: false, id: page[0].id });
      })
      .catch(function(err) {
        this.setState({ loading: false });
        console.log("Fetch Error :-S", err);
      });
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
    const { loading, id } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    return (
      <div className="Page">
        <Generic pageId={id} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onReceivedpage: page => dispatch(receivedPage(page))
});

export default connect(null, mapDispatchToProps)(PageFetcher);
