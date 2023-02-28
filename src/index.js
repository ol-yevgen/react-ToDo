import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import './style/index.css';
import './style/index-media.css'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// reportWebVitals();
