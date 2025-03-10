import React from 'react';
import StyledWrapper from "../components/AuthStyles.js";
import {Link} from 'react-router-dom';
import {Field, Form, Formik} from "formik";

const RegistrationPage = () => {
    return (<StyledWrapper>
        <div className="login-box">
            <p>Sign Up</p>

            <Formik
                initialValues={{name: '', password: '', confirmPassword: ''}}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    navigate('/');
                }}>

                <Form>
                    <div className="user-box">
                        <Field id="name" name="name" required/>
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="user-box">
                        <Field id="password" name="password" type="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="user-box">
                        <Field id="password" name="confirmPassword" type="password" required/>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>

                    <button type="submit" className="btn">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Submit
                    </button>


                </Form>
            </Formik>
            <p>
                I have an account
                <Link to="/login" style={{marginLeft: '175px'}}>Login</Link>
            </p>
        </div>
    </StyledWrapper>);
}

export default RegistrationPage;
