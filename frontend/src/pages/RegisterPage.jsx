import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { registerUser } from '../api/authApi.js';
import AuthForm from '../components/auth/AuthForm.jsx';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    await dispatch(registerUser(values)).unwrap();
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
      .label('Name'),

    password: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
      .label('Password'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required')
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
        schema={registerSchema}
        redirectPrompt="I have an account"
        redirectName="Login"
        switchLink="/login"
      />
    </div>
  );
};

export default RegistrationPage;
