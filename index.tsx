
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
<<<<<<< Updated upstream
  throw new Error("Could dgyg hg not find root element to mount to");
=======
  throw new Error("Could dgyg  jhafdm not find root element to mount to");
>>>>>>> Stashed changes
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);