import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AppLink = styled(Link)`
  color: black;
  border: 1rem black solid;
`;
