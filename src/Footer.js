import React, { Component } from "react";

import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const { loading } = this.props;
    console.log(loading);
    if (!loading) {
      return <div>Footer</div>;
    }
    return null;
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Footer);
