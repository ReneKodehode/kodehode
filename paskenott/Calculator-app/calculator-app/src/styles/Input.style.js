import styled from "styled-components";
import input from "../Components/input";

export let StyledInput = styled(input)`
    width: 75px;
    height: 25px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 25px;
    background-color: ${props => (props.backgroundColor)};

    //funker på firefox... bra nok! (moz range thumb)
    &::-webkit-slider-thumb {
        border: none;
        outline: none;
        background-color: ${props => (props.boxShadow)};
        }
    &::-moz-range-thumb{
        border: none;
        outline: none;
        background-color: ${props => (props.boxShadow)};
        }
    &:focus{
        border: none;
        outline: none;
        //background-color: ${props => (props.boxShadow)};
    }
`;