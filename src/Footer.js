import React, { Component } from "react";

import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const { loading } = this.props;

    if (!loading) {
      return <div>Footer</div>;
    }
    return null;
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Footer);
