import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { initSocketListeners } from '../socket/listeners.js';
import ToastNotifications from '../components/ui/ToastNotifications.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initSocketListeners(dispatch);
  }, []);

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
}

export default App;
