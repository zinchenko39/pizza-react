import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

