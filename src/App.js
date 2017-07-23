import React, { Component } from "react";
import "./App.css";
import "requestidlecallback";
import jsonRequest from "./helpers/Fetch.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./Store";
import { receivedMenu, requestAllPages, MENU_URL } from "./Actions";

import AppHeader from "./AppHeader.js";
import PostFetcher from "./components/PostFetcher";
import PageFetcher from "./components/PageFetcher";

class App extends Component {
  componentWillMount() {
    jsonRequest(MENU_URL)
      .then(data => {
        this.props.onReceivedMenu(data.items);
      })
      .catch(function(err) {
        console.log("Fetch Error menu", err);
      });

    requestIdleCallback(() => {
      this.props.onIdle();
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppHeader />
            <Route path="/:page/" component={PageFetcher} />
            <Route
              path="/(\d{4}/\d{2}/\d{2})/:postname/"
              component={PostFetcher}
            />
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onReceivedMenu: menuList => dispatch(receivedMenu(menuList)),
  onIdle: () => dispatch(requestAllPages())
});

const mapStateToProps = state => ({
  menu: state.menu
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const ProviderApp = () =>
  <Provider store={store}>
    <ConnectedApp />
  </Provider>;

export default ProviderApp;
