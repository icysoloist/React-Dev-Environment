import React from 'react';

/* Components */
import App from './app/App';

/* CSS */
import './index.css';

/* Libraries */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
