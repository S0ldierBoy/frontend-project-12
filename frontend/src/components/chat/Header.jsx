import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';

const Header = () => {
  const { logout } = useAuth();

  return (
    <div className="chat-header">
      <h1>
        <Link to="/">CodeChat</Link>
      </h1>
      <button className="logout-button" onClick={logout}>
        Log out
      </button>
    </div>
  );
};

export default Header;
