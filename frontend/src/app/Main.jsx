import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import store from './store.js';
import App from './App.jsx';
import '../index.css';
import { ChatInputFocusProvider } from '../context/ChatInputFocusContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChatInputFocusProvider>
        <App />
      </ChatInputFocusProvider>
    </Provider>
  </StrictMode>
);
