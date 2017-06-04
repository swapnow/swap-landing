import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import configureStore from './core/store';
import Root from './core/root';
declare var window;

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');

  let preloadedState: object = {};

  preloadedState = {};
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});
