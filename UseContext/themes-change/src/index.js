import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemProvider } from './context/Them';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemProvider>
    <App />

    </ThemProvider>
  </React.StrictMode>
);

reportWebVitals();
