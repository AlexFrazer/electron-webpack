import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';

import routes from 'app/routes';

export default function Root({ children, history, store }) {
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}