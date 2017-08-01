import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default class MenuItemChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChildren: false
    };
  }

  renderChildren = items => {
    return items.map(child =>
      <li key={child.id}>
        <Link onClick={this.toggleAndClose} to={new URL(child.url).pathname}>
          {child.title}
        </Link>
      </li>
    );
  };

  toggleAndClose = () => {
    this.toggleChildren();
    this.props.closeMenu();
  };

  toggleChildren = () => {
    this.setState({ showChildren: !this.state.showChildren });
  };

  render() {
    const { title, items } = this.props;
    const { showChildren } = this.state;

    return (
      <ul
        className={classNames(
          { "navigation-list-item": true },
          { "has-children": true },
          { "show-children": showChildren }
        )}
        onClick={this.toggleChildren}
      >
        <li>
          {title} >>
        </li>
        {this.renderChildren(items)}
      </ul>
    );
  }
}
