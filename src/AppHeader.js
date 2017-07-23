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
        <HeaderContainer>
          <Header>
            <Title>
              Test <SmallTitle>liten title</SmallTitle>
            </Title>
          </Header>
        </HeaderContainer>

        <NavigationContainer>
          <Navigation>
            <ul>
              {this.renderMenuItems()}
            </ul>
          </Navigation>
        </NavigationContainer>
      </Banner>
    );
  }
}
const mapStateToProps = state => ({
  menuList: state.menu.menuList
});

export default connect(mapStateToProps)(AppHeader);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 250px;
`;

const Banner = styled.div`
  height: 250px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 5rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row-wrap;
  width: 100%;
  padding: 0 1rem;
`;

const Title = styled.div`
  height: 68px;
  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const SmallTitle = styled.small`
  font-weight: 200;
  font-size: 80%;
`;

const NavigationContainer = styled.div`
  height: 3em;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-around;
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
