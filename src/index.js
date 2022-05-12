import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components';
import { App } from './pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);


