import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Global Styles */
import './styles.scss';

render(
  <Router>
    <Switch>
      <Route path="/">
        <div
          style={{ height: '100%' }}
          className="flex-row center vertical-center">
          <h1>The next big thing starts here.</h1>
        </div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);
