import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initSocketListeners } from '../socket/listeners.js';
import ToastNotifications from '../components/ui/ToastNotifications.jsx';
import { Provider, ErrorBoundary } from '@rollbar/react';
import rollbarConfig from '../utils/rollbarConfig.js';

function App() {
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
}

export default App;
