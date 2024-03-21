import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { CountProvider } from './context/Count';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);


