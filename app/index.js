import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import Root from 'app/containers/Root';

const render = async (Component, ...props) => {
  const target = document.getElementById('root');

  try {
    const { AppContainer } = await import('react-hot-loader');

    ReactDOM.render(
      <AppContainer>
        <Component {...props} history={hashHistory} />
      </AppContainer>,
      target,
    );
  } catch (e) {
    ReactDOM.render(<Component />, target);
  }
};

render(Root);

if (module.hot) {
  module.hot.accept('app/containers/Root', () => {
    const { default: NextRoot } = require('app/containers/Root');
    render(NextRoot);
  });
}