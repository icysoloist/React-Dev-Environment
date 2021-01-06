import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import App from './app/App';

/* Styles */
import './styles.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
