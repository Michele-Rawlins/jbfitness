// import { StrictMode, React } from 'react';
// import { createRoot } from 'react-dom/client';
// import './styles/index.scss';
// import App from './App/App';
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
// <StrictMode>
// <App />
// </StrictMode>,
//  document.getElementById('root')
// );
/* eslint-disable padded-blocks */
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App/App';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(< App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
