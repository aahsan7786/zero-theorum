import React, {useState, useEffect} from "react";
import {menuConfig} from "./menuConfig";
import MenuItem from "./menuItem";
const Menu = (props) => {
  const getMenu = () => {
    return (
      menuConfig &&
      menuConfig.map((menuItem) => {
        return (
          <MenuItem
            name={menuItem.name}
            icon={menuItem.icon}
            hoverIcon={menuItem.hoverIcon}
            route={menuItem.route}
            onClick={menuItem.onClick}
            className={menuItem.className}></MenuItem>
        );
      })
    );
  };
  return getMenu();
};

export default Menu;
