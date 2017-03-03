import React from 'react';
import { Route, IndexRoute } from 'react-router';

function App({ children }) {
  return (
    <div className="app">
      {children}
    </div>
  )
}

function Home({ greeting = 'Hello' }) {
  return (
    <div className="home">
      <h1>Hello!</h1>
    </div>
  );
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);