import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  render() {
    const { url, title, closeMenu } = this.props;

    return (
      <li className="navigation-list-item">
        <Link onClick={closeMenu} to={new URL(url).pathname}>
          {title}
        </Link>
      </li>
    );
  }
}
