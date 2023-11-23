import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.min.css';
import NavBar from './NavBar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
