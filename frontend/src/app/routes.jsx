import LoginPage from './pages/LoginPage.jsx';
import MainChatPage from './pages/MainChatPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import ProtectedRoute from './features/auth/ProtectedRoute.jsx';

const routes = [
  {
    path: '/login',
    element: (
      <AppLayout>
        <LoginPage />
      </AppLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AppLayout>
        <SignupPage />
      </AppLayout>
    ),
  },
  {
    path: '*',
    element: (
      <AppLayout>
        <NotFoundPage />
      </AppLayout>
    ),
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout>
          <MainChatPage />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
];

export default routes;
