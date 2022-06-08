import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../img/Search.svg";
import { menuBar, searchBar, shopCart, user } from "./ComponentsGlobal";

export const NavBar = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 4rem;
  left: 0;
  right: 0;
`;

export const NavLink = styled(Link)`
  color: black;
  margin-left: 1rem;
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 0.2rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const StyledMenuBar = styled(menuBar)`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;

export const SearchBar = styled(searchBar)`
  flex: 1;
  margin-right: auto;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 1.5rem;
  text-align: center;
  height: 2rem;
  font-size: 1.2rem;
  border: 0.2rem black solid;
  width: 100%;
`;

export const User = styled(user)`
  height: 2rem;
  width: 2rem;
`;

export const ShoppingCart = styled(shopCart)`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;
