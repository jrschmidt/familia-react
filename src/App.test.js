import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TreeDisplay3Gen from './TreeDisplay3Gen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TreeDisplay3Gen component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TreeDisplay3Gen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
