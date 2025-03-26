import React from 'react';
import { useDispatch } from 'react-redux';
import { signupSchema } from '../validation/authSchema.js';
import { signupUser } from '../api/authApi.js';
import AuthForm from '../features/auth/AuthForm.jsx';

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    await dispatch(signupUser(values)).unwrap();
  };

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
