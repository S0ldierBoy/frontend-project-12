import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledButton = styled(Link)`
    display: inline-block;
    position: relative;
    width: 10em;
    height: 3.5em;
    border: 2px solid white;
    outline: none;
    background-color: transparent;
    color: -webkit-link;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 3.5em;
    cursor: pointer;
    text-decoration: none;

    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: black;
        transition: 0.5s;
        transform-origin: center;
    }

    &::before {
        content: "";
        position: absolute;
        top: 80%;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: black;
        transition: 0.5s;
        transform-origin: center;
    }

    &:hover::before,
    &:hover::after {
        transform: scale(0);
    }

    &:hover {
        box-shadow: inset 0 0 25px white;
    }
`;

export default StyledButton;