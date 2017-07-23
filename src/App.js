import React, { Component } from "react";
import "./App.css";
import "requestidlecallback";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./Store";
import { requestAllPages, requestMenu, requestGenericPage } from "./Actions";
import styled from "styled-components";

import Menu from "./components/menu/Menu";
import PostFetcher from "./components/PostFetcher";
import PageFetcher from "./components/PageFetcher";
import Footer from "./Footer";

class App extends Component {
  componentWillMount() {
    this.props.initFetchMenu();
    this.props.initPage(new URL(window.location.href));
  }

  pageReady = () => {
    return this.props.pageLoaded && this.props.menuLoaded;
  };

  render() {
    if (this.pageReady()) {
      requestIdleCallback(() => {
        this.props.onIdle();
      });
      return (
        <Router>
          <AppWrapper>
            <Menu />
            <Route
              path="/(\d{4}/\d{2}/\d{2})/:postname/"
              component={PostFetcher}
            />
            <Route path="/:page/" component={PageFetcher} />
            <Route path="/" component={PageFetcher} />
            <Footer />
          </AppWrapper>
        </Router>
      );
    } else {
      return (
        <div>Loading... Doing everything we can to prepare the page for u!</div>
      );
    }
  }

  componentDidMount() {
    console.log(this.pageReady());
    if (this.pageReady()) {
    }
  }
}

const mapDispatchToProps = dispatch => ({
  initFetchMenu: () => dispatch(requestMenu()),
  initPage: location => dispatch(requestGenericPage(location)),
  onIdle: () => dispatch(requestAllPages())
});

const mapStateToProps = state => ({
  menuLoaded: state.menu.loaded,
  pageLoaded: state.pages.pageLoaded
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

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
