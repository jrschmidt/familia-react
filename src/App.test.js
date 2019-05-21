import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TreeDisplay3Gen from './TreeDisplay3Gen';
import TreeDisplayHeader from './TreeDisplayHeader';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TreeDisplay3Gen component', () => {
  const people = [
    {firstname: 'Joe', surname: 'Smith', birthdate: '1969-07-20'},
    {firstname: 'Debbie', surname: 'Smith', birthdate: '1998-11-06'}
  ];
  const div = document.createElement('div');
  ReactDOM.render(<TreeDisplay3Gen people={people} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TreeDisplayHeader component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TreeDisplayHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PersonDisplayTile component', () => {
  const person = {firstname: 'Debbie', surname: 'Smith', birthdate: '1998-11-06'}
  const div = document.createElement('div');
  ReactDOM.render(<PersonDisplayTile person={person}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PersonMini component', () => {
  const person = {firstname: 'Joe', surname: 'Smith', birthdate: '1969-07-20'}
  const div = document.createElement('div');
  ReactDOM.render(<PersonMini person={person}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
