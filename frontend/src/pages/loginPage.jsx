import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import StyledWrapper from "../components/AuthStyles.js";
import {Link} from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();

    return (<StyledWrapper>
        <div className="login-box">
            <p>Login</p>
            <Formik
                initialValues={{name: '', password: ''}}

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

                    <button type="submit" className="btn">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Submit
                    </button>


                </Form>
            </Formik>

            <p className="no-wrap">
                Don't have an account?
                <Link to="/register" style={{marginLeft: '122px'}}>Sign up!</Link>
            </p>

        </div>
    </StyledWrapper>)
}


export default LoginPage;
