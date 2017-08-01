import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuItemChildren from "./MenuItemChildren";
import { requestMenu } from "./../../Actions";

import { connect } from "react-redux";
import classNames from "classnames";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  componentWillMount() {
    this.props.getMenu();
  }
  renderMenuItems = () => {
    const { menuList } = this.props;

    if (menuList) {
      return menuList.map(item => {
        if (item.children) {
          return (
            <MenuItemChildren
              key={item.id}
              url={item.url}
              items={item.children}
              title={item.title}
              closeMenu={this.toggleMenu}
            />
          );
        }

        return (
          <MenuItem
            key={item.id}
            url={item.url}
            title={item.title}
            closeMenu={this.toggleMenu}
          />
        );
      });
    } else {
      return null;
    }
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { loading } = this.props;
    const { showMenu } = this.state;

    if (!loading) {
      return (
        <div className="menu-container-outer">
          <div className="menu-container">
            <div className="title-hamburger-container">
              <header>
                <HomeLink
                  onClick={() => {
                    this.setState({ showMenu: false });
                  }}
                  to="/"
                >
                  <h1 className="menu-title">Unified Golf AB</h1>
                </HomeLink>
              </header>

              <div
                className="menu-hamburger-container"
                onClick={this.toggleMenu}
              >
                <button
                  className={classNames(
                    { "hamburger hamburger--3dxy": true },
                    { "is-active": showMenu }
                  )}
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <nav
            className={classNames(
              { "menu-navigation": true },
              { show: showMenu }
            )}
          >
            <ul className="menu-navigation-list">
              {this.renderMenuItems()}
            </ul>
          </nav>
        </div>
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
