import React from 'react';
import StyledButton from "../components/styledButton.jsx";

const NotFoundPage = () => {
    return (
        <div style={{textAlign: 'center', fontSize: '50px'}}>
            <h1>404</h1>
            <p>Oops! Looks like you got lost</p>
            <StyledButton to="/register">
                Take me back
            </StyledButton>
        </div>
    );
}


export default NotFoundPage;

