import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Provider, ErrorBoundary } from '@rollbar/react';
import routes from './routes.jsx';
import { initSocketListeners } from '../services/socket/listeners.js';
import ToastNotifications from '../components/ui/ToastNotifications.jsx';
import rollbarConfig from '../utils/rollbarConfig.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initSocketListeners(dispatch);
  }, []);

  return (
    <Router>
      <Provider config={rollbarConfig}>
        <ErrorBoundary>
          <ToastNotifications />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </ErrorBoundary>
      </Provider>
    </Router>
  );
};

export default App;
