/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Manage Products",
    to: "/product-list",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnleWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnleWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand" href="#">
          Call API
        </a>
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnleWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}
export default Menu;
