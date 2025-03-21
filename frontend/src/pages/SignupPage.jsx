import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signupUser } from '../api/authApi.js';
import AuthForm from '../features/auth/AuthForm.jsx';

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    await dispatch(signupUser(values)).unwrap();
  };

  const signupSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required field')
      .label('Name'),

    password: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required field')
      .label('Password'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required field')
      .label('Confirm password'),
  });

  return (
    <div>
      <AuthForm
        title="Sign Up"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'password', label: 'Password', type: 'password' },
          {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
          },
        ]}
        initialValues={{ name: '', password: '', confirmPassword: '' }}
        onSubmit={handleRegister}
        schema={signupSchema}
        redirectPrompt="I have an account"
        redirectName="Login"
        switchLink="/login"
      />
    </div>
  );
};

export default SignupPage;
