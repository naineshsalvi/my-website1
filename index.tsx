<h1 style="color:white; text-align:center; margin-top:40px;">
  WEBSITE IS DEPLOYED CORRECTLY
</h1>
<p style="color:white; text-align:center;">
  Content is hidden by JavaScript
</p>
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
