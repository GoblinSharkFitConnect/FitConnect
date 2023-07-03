// import React from 'react';
// import { createRoot } from 'react-dom/client'
// import App from "./App.jsx"
// import { BrowserRouter as Router } from 'react-router-dom'

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <Router>
//     <App />
//   </Router>
// );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App.jsx';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);