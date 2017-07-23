import React, { Component } from "react";

import { connect } from "react-redux";

import Generic from "./page/Generic";
import Template from "./page/Template";

class PageTemplateSwitcher extends Component {
  render() {
    const { page } = this.props;

    switch (page.template) {
      case "template.php":
        return <Template {...this.props} />;
      default:
        return <Generic {...this.props} />;
    }
  }
}

const mapStateToProps = (state, props) => ({
  page: state.pages.pages[props.pageId]
});

export default connect(mapStateToProps)(PageTemplateSwitcher);
