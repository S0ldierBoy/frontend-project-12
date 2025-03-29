import React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/ui/styledButton.js';

const Wrapper = styled.div`
  text-align: center;
  font-size: 75px;
  color: white;

  h1 {
    font-size: 100px;
  }
`;

const NotFoundPage = () => (
  <Wrapper>
    <h1>404</h1>
    <p>Oops! Looks like you got lost</p>
    <StyledButton to="/login">Take me back</StyledButton>
  </Wrapper>
);

export default NotFoundPage;
