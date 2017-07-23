import React, { Component } from "react";

import { connect } from "react-redux";

class Generic extends Component {
  render() {
    const { page } = this.props;

    console.log("Loaded generic");
    return (
      <div className="App">
        {page.title.rendered}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  page: state.pages.pages[props.pageId]
});

export default connect(mapStateToProps)(Generic);
