import styled from "styled-components";
import { button, outputText } from "./AppPageComponents";

export const StyledButton = styled(button)`
    background-color: ${prop => prop.backgroundColor};
    width: 25%;
    height: 4rem;
    font-size: 2rem;
    flex-basis: 50%;
`;

export const StyledOutputText = styled(outputText)`
    font-size: 4rem;
    margin: 0;
    padding: 0;
`;

export const StyledContentDiv = styled.div`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;