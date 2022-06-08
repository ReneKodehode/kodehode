import React from "react";
import Menu from "../img/Menu.svg";
import User from "../img/User.svg";
import ShopCart from "../img/ShopCart.svg";

export const menuBar = ({ className }) => {
  return <img src={Menu} alt="menu bar" className={className}></img>;
};

export const user = ({ className }) => {
  return <img src={User} alt="my page" className={className}></img>;
};

export const shopCart = ({ className }) => {
  return <img src={ShopCart} alt="Shopping Cart" className={className}></img>;
};

export const searchBar = ({ className }) => {
  return (
    <input className={className} type="text" placeholder="Search..."></input>
  );
};
