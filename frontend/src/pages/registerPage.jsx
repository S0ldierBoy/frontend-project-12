import React from 'react';
import StyledWrapper from "../components/AuthStyles.js";
import {Link} from 'react-router-dom';

const RegistrationForm = () => {
    return (<StyledWrapper>
        <div className="login-box">
            <p>Sign Up</p>
            <form>
                <div className="user-box">
                    <input required name type="text"/>
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input required name type="password"/>
                    <label>Password</label>
                </div>

                <div className="user-box">
                    <input required name type="password"/>
                    <label>Сonfirm Password</label>
                </div>
                <a href="#">
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    Submit
                </a>
            </form>
            <p>
                I have an account
                <Link to='/' style={{marginLeft: '175px'}}>Login</Link>
            </p>
        </div>
    </StyledWrapper>);
}

export default RegistrationForm;
