import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider, connect } from "react-redux";
import baseurl from "./BaseUrl";
import store from "./Store";
import AppHeader from "./AppHeader.js";
import { receivedMenu } from "./Actions";

import PostFetcher from "./components/PostFetcher";
import PageFetcher from "./components/PageFetcher";

class App extends Component {
  componentWillMount() {
    fetch(baseurl + "/wp-json/wp-api-menus/v2/menus/2")
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(data => {
          this.props.onReceivedMenu(data.items);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
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
  onReceivedMenu: menuList => dispatch(receivedMenu(menuList))
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
