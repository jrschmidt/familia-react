import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ChildRow from './ChildRow.js';
import PersonMini from './PersonMini.js';

const childrenList = [
  {_id: 'p01', surname: 'Green', firstname: 'Abby'},
  {_id: 'p02', surname: 'Green', firstname: 'Babby'},
  {_id: 'p03', surname: 'Green', firstname: 'Crabby'},
  {_id: 'p04', surname: 'Green', firstname: 'Dabby'}
];

let props;

afterEach( () => {
  props = {
    people: [],
    viewRoleTags: [],
    rowType: ''
  };
});

it("renders ChildRow component with rowType 'single-1' and 1 person", () => {
  props = {
    people: childrenList.slice(0,1),
    viewRoleTags: ['child-middle'],
    rowType: 'single-1'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(1);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'single-2' and 2 persons", () => {
  props = {
    people: childrenList.slice(0,2),
    viewRoleTags: ['child-2', 'child-3'],
    rowType: 'single-2'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(2);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'single-3' and 3 persons", () => {
  props = {
    people: childrenList.slice(0,3),
    viewRoleTags: ['child-left', 'child-middle', 'child-right'],
    rowType: 'single-3'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(3);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'extend-4' and 4 persons", () => {
  props = {
    people: childrenList.slice(0,4),
    viewRoleTags: ['child-1', 'child-2', 'child-3', 'child-4'],
    rowType: 'extend-4'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(4);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'final-1' and 1 person", () => {
  props = {
    people: childrenList.slice(0,1),
    viewRoleTags: ['child-1'],
    rowType: 'final-1'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(1);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'final-2' and 2 persons", () => {
  props = {
    people: childrenList.slice(0,2),
    viewRoleTags: ['child-1', 'child-2'],
    rowType: 'final-2'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(2);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'final-3' and 3 persons", () => {
  props = {
    people: childrenList.slice(0,3),
    viewRoleTags: ['child-1', 'child-2', 'child-3'],
    rowType: 'final-3'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(3);
  expect(wrapper.find('svg')).toHaveLength(1);
});

it("renders ChildRow component with rowType 'final-4' and 4 persons", () => {
  props = {
    people: childrenList.slice(0,4),
    viewRoleTags: ['child-1', 'child-2', 'child-3', 'child-4'],
    rowType: 'final-4'
  };
  const wrapper = shallow(<ChildRow {...props}/>);
  expect(wrapper.find(PersonMini)).toHaveLength(4);
  expect(wrapper.find('svg')).toHaveLength(1);
});
