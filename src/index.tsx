import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import './style/reset.css';
import './style/fonts.css';
import './style/classes.css';
import './style/main.css';
import './style/borders.css';
import './style/gradients.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
