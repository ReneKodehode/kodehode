import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
    background-color: ${props => (props.backgroundColor)};
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-family: Spartan;
    font-weight: 700;
    }
`;