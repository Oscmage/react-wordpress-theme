import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  render() {
    const { url, title, closeMenu } = this.props;

    return (
      <li className="navigation-list-item">
        <NavigationItem onClick={closeMenu} to={new URL(url).pathname}>
          {title}
        </NavigationItem>
      </li>
    );
  }
}

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
