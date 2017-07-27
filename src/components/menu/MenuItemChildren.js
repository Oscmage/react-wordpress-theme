import React, { Component } from "react";
import styled from "styled-components";
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
        <NavigationItem
          onClick={this.toggleAndClose}
          to={new URL(child.url).pathname}
        >
          {child.title}
        </NavigationItem>
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

const NavigationItem = styled(Link) `
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c4c4c4;
  text-decoration: none;
  color: #4a4a4a;
  font-family: AvenirNext;
  font-weight: bold;
  font-size: 1.25rem;
  :hover {
    background-color: #E4E4E4;
  }
  :active {
    background-color: #D4D4D4;
  }
`;
