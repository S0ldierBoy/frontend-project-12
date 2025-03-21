import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice.js';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = Boolean(token);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return { token, user, isAuthenticated, logout: handleLogout };
};

export default useAuth;
