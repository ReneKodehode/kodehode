import styled from "styled-components";
import button from "../Components/button";

export const StyledButton = styled(button)`
    width: 70px;
    height: 70px;
    margin: 10px;
    background-color: ${props => (props.backgroundColor)};
    box-shadow: 0px 0px 10px 0px ${props => (props.boxShadow)};
    border: none;
    color: ${props => (props.color)};

    &:hover{
        background-color: transparent;
    }
`;