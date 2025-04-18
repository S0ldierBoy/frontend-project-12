import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import routes from './routes.jsx';
import { initSocketListeners } from '../services/socket/listeners.js';
import ToastNotifications from '../components/ui/ToastNotifications.jsx';
import initSocket from '../services/socket/index.js';

const App = () => {
  const dispatch = useDispatch();
  const socket = initSocket();

  useEffect(() => {
    initSocketListeners(dispatch);

    return () => {
      socket.off();
    };
  }, [dispatch]);

  return (
    <Router>
      <ToastNotifications />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
