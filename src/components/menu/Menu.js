import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { requestMenu } from "./../../Actions";

import { connect } from "react-redux";

class Menu extends Component {
  componentWillMount() {
    this.props.getMenu();
  }
  renderMenuItems = () => {
    const { menuList } = this.props;

    return menuList.map(item => {
      return (
        <MenuItem
          key={item.id}
          url={item.url}
          children={item.children}
          title={item.title}
        />
      );
    });
  };

  render() {
    const { loading } = this.props;
    console.log(loading);
    if (!loading) {
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
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => ({
  menuList: state.menu.menuList
});

const mapDispatchToProps = dispatch => ({
  getMenu: () => dispatch(requestMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

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

const NavigationList = styled.ul`display: flex;`;

const Navigation = styled.nav`display: flex;`;
