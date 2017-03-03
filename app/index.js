import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

const target = document.getElementById('root');
const splash = document.getElementById('splash');

render(
  <AppContainer>
    <div>
      <h1>Hello!</h1>
    </div>
  </AppContainer>,
  target
);