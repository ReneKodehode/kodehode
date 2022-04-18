import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    background-color: ${props => (props.backgroundColor)};
    padding: 5px;
    border-radius: 5px;
    margin-top: 15px;
    height: 450px;
`;