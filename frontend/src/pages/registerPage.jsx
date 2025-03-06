import React from 'react';
import StyledWrapper from "../components/AuthStyles.js";

const RegistrationForm = () => {
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

                    <div className="user-box">
                        <input required name type="password"/>
                        <label>Сonfirm password</label>
                    </div>
                    <a href="#">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Submit
                    </a>
                </form>
                <p>Don't have an account? <a href className="a2">Sign up!</a></p>
            </div>
        </StyledWrapper>);
}

export default RegistrationForm;
