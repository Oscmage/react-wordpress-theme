import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  renderChildren = children => {
    return children.map(child => {
      return (
        <NavigationItem key={child.id} to={new URL(child.url).pathname}>
          {child.title}
        </NavigationItem>
      );
    });
  };

  render() {
    const { url, title, children } = this.props;

    if (children) {
      return (
        <NavigationItemWithChildren>
          {title}
          {this.renderChildren(children)}
        </NavigationItemWithChildren>
      );
    }

    return (
      <ListItem>
        <NavigationItem to={new URL(url).pathname}>
          {title}
        </NavigationItem>
      </ListItem>
    );
  }
}

const NavigationItemWithChildren = styled.ul``;

const ListItem = styled.li``;

const NavigationItem = styled(Link)`
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
