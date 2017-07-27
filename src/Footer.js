import React, { Component } from "react";

import { connect } from "react-redux";
import NewsLetterSubscription from "./components/form/NewsLetterSubscription";

class Footer extends Component {
  render() {
    const { loading } = this.props;

    if (!loading) {
      return (
        <div className="footer-container">
          <NewsLetterSubscription />
        </div>
      );
    }
    return null;
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Footer);
