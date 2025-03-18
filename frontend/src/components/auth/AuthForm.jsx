import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import StyledWrapper from './AuthFormWrapper.js';

const AuthForm = ({
  title,
  fields,
  initialValues,
  onSubmit,
  redirectPrompt,
  switchLink,
  redirectName,
  schema,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <StyledWrapper>
      <div className={`login-box`}>
        <p>{title}</p>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnBlur={false}
          validateOnChange={false} // последние настройки дают валидацию только при отправке
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await onSubmit(values);
              navigate('/');
            } catch (error) {
              let userFriendlyMessage;

              switch (error?.statusCode) {
                case 401:
                  userFriendlyMessage = 'Login failed';
                  break;
                case 409:
                  userFriendlyMessage = 'User already exists';
                  break;
                default:
                  userFriendlyMessage = 'Network error. Try again.';
                  break;
              }
              setErrors({ name: userFriendlyMessage });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors }) => (
            <Form>
              {fields.map(({ name, label, type = 'text' }) => (
                <div className="user-box" key={name}>
                  <Field
                    id={name}
                    name={name}
                    type={type}
                    required
                    className={errors[name] ? 'input-error' : ''}
                  />
                  <ErrorMessage
                    name={name}
                    component="div"
                    className="form-error"
                  />
                  <label htmlFor={name}>{label}</label>
                </div>
              ))}

              <button type="submit" className="btn">
                <span />
                <span />
                <span />
                <span />
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <p className="auth-redirect">
          {redirectPrompt}
          <Link to={switchLink}>{redirectName}</Link>
        </p>
      </div>
    </StyledWrapper>
  );
};
export default AuthForm;
