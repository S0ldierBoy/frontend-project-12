import React from 'react';
import StyledWrapper from "../components/AuthStyles.js";
import {Link} from 'react-router-dom';

const LoginPage = () => {
    return (<StyledWrapper>
        <div className="login-box">
            <p>Login</p>
            <form>
                <div className="user-box">
                    <input required name type="text"/>
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input required name type="password"/>
                    <label>Password</label>
                </div>
                <a href="#">
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    Submit
                </a>
            </form>
            <p className="no-wrap">
                Don't have an account?
                <Link to="/register" style={{marginLeft: '122px'}}>Sign up!</Link>
            </p>
        </div>
    </StyledWrapper>)
}


export default LoginPage;
