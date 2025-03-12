import React from 'react';
import styled from "styled-components";
import StyledButton from "../components/ui/Button/StyledButton.js";

const Wrapper = styled.div`
    text-align: center;
    font-size: 50px;
    color: white;

`;

const NotFoundPage = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <p>Oops! Looks like you got lost</p>
            <StyledButton to="/login">
                Take me back
            </StyledButton>
        </Wrapper>);
}

export default NotFoundPage;

