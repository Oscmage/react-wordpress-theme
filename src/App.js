import React, { Component } from "react";
import "./App.css";
import "requestidlecallback";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./Store";
import styled from "styled-components";

import Menu from "./components/menu/Menu";
import PostFetcher from "./components/PostFetcher";
import PageFetcher from "./components/PageFetcher";
import Footer from "./Footer";

class App extends Component {
  padgeLoading = () => {
    return !(this.props.pageLoaded && this.props.menuLoaded);
  };

  render() {
    return (
      <Router>
        <AppWrapper>
          <Menu loading={this.padgeLoading()} />
          <Route
            path="/(\d{4}/\d{2}/\d{2})/:postname/"
            component={PostFetcher}
          />
          <Route
            path="/:page/"
            render={props =>
              <PageFetcher {...props} loading={this.padgeLoading()} />}
          />
          <Route
            path="/"
            render={props =>
              <PageFetcher {...props} loading={this.padgeLoading()} />}
          />
          <Footer loading={this.padgeLoading()} />
        </AppWrapper>
      </Router>
    );
  }
  /*
  componentDidUpdate() {
    if (this.padgeLoading()) {
      console.log("rendered and now fetching");
      requestIdleCallback(() => {
        this.props.onIdle();
      });
    }
  }
  */
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

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
