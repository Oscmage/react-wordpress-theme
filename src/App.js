import React, { Component } from "react";
import "./App.css";
import "requestidlecallback";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./Store";

import Menu from "./components/menu/Menu";
import PostFetcher from "./components/PostFetcher";
import PageFetcher from "./components/PageFetcher";
import Footer from "./Footer";
import classNames from "classnames";

class App extends Component {
  pageLoading = () => {
    return !(this.props.pageLoaded && this.props.menuLoaded);
  };

  render() {
    return (
      <Router>
        <div
          className={classNames(
            { "app-wrapper": true },
            { pageLoading: this.pageLoading() }
          )}
        >
          <Menu loading={this.pageLoading()} />
          <Route
            path="/(\d{4}/\d{2}/\d{2})/:postname/"
            component={PostFetcher}
          />
          <Route
            path="/:page/"
            render={props =>
              <PageFetcher {...props} loading={this.pageLoading()} />}
          />
          <Route
            path="/"
            render={props =>
              <PageFetcher {...props} loading={this.pageLoading()} />}
          />
          <Footer loading={this.pageLoading()} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  menuLoaded: state.menu.loaded,
  pageLoaded: state.pages.pageLoaded
});

const ConnectedApp = connect(mapStateToProps)(App);

const ProviderApp = () =>
  <Provider store={store}>
    <ConnectedApp />
  </Provider>;

export default ProviderApp;
