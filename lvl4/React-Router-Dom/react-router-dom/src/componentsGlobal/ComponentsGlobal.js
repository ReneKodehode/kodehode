import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  border: 0.1rem black solid;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: black;
`;