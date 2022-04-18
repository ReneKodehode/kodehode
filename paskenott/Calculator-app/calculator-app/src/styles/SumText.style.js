import styled from "styled-components";
import SumText from "../Components/sumText"

export const StyledSumText = styled(SumText)`
    font-size: 32px;
    color: white;
    align-content: flex-end;
    text-align: right;
    margin-right: 10px;
    color: ${props => (props.color)};
`;