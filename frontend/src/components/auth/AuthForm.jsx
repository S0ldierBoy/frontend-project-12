import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import StyledWrapper from "./AuthFormWrapper.js";


const AuthForm = ({title, fields, initialValues, onSubmit, redirectPrompt, switchLink, redirectName}) => {
    const navigate = useNavigate();

    return (
        <StyledWrapper>
            <div className={`login-box`}>
                <p>{title}</p>
                <Formik
                    initialValues={initialValues}

                    onSubmit={async (values, {setSubmitting, setErrors}) => {
                        try {
                            await onSubmit(values);
                            navigate('/');
                        } catch (error) {
                            setErrors({name: 'Invalid username or password'});
                        } finally {
                            setSubmitting(false);
                        }
                    }}>

                    <Form>
                        {fields.map(({name, label, type = 'text'}) => (<div className='user-box' key={name}>
                            <Field id={name} name={name} type={type} required/>
                            <label htmlFor={name}>{label}</label>
                        </div>))}

                        <button type="submit" className="btn">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            Submit
                        </button>
                    </Form>
                </Formik>
                <p className="auth-redirect">
                    {redirectPrompt}
                    <Link to={switchLink}>{redirectName}</Link>
                </p>
            </div>
        </StyledWrapper>)
}
export default AuthForm;

