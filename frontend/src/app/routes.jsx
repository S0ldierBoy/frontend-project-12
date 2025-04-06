import LoginPage from '../pages/LoginPage.jsx';
import MainChatPage from '../pages/MainChatPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import AuthLayout from '../layouts/authLoyaut.jsx';
import ProtectedRoute from '../features/auth/ProtectedRoute.jsx';

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
        <AuthLayout>
          <MainChatPage />
        </AuthLayout>
      </ProtectedRoute>
    ),
  },
];

export default routes;
