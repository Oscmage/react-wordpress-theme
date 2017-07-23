import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class AppHeader extends Component {
  renderMenuItems = () => {
    const { menuList } = this.props;

    return menuList.map(item => {
      return (
        <NavigationItem key={item.id} to={new URL(item.url).pathname}>
          {item.title}
        </NavigationItem>
      );
    });
  };

  render() {
    return (
      <Banner>
        <Header>
          <HomeLink to="/">
            <Title>Test</Title>
          </HomeLink>
        </Header>

        <Navigation>
          <NavigationList>
            {this.renderMenuItems()}
          </NavigationList>
        </Navigation>
      </Banner>
    );
  }
}
const mapStateToProps = state => ({
  menuList: state.menu.menuList
});

export default connect(mapStateToProps)(AppHeader);

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const Banner = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
`;

const Header = styled.header`
  display: flex;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  margin: 0;
  font-size: 3rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const NavigationList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Navigation = styled.nav`display: flex;`;

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
