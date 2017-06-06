import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './core/root';
declare var window;

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
