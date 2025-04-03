import LoginPage from '../pages/LoginPage.jsx';
import MainChatPage from '../pages/MainChatPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import AuthLayout from '../components/authLoyaut.jsx';
import ProtectedRoute from '../app/ProtectedRoute.jsx';

const routes = [
  {
    path: '/login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout>
        <SignupPage />
      </AuthLayout>
    ),
  },
  {
    path: '*',
    element: (
      <AuthLayout>
        <NotFoundPage />
      </AuthLayout>
    ),
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainChatPage />
      </ProtectedRoute>
    ),
  },
];

export default routes;
