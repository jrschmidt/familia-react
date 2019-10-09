import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplay from './TreeDisplay.js';
import TreeDisplayCore from './TreeDisplayCore.js';
import ChildView from './ChildView.js';

let props = {}

beforeAll( () => {
  props = {

    people: [
      {
        _id: 'p01',
        generation: 0,
        gender: 'male',
        surname: 'Green',
        firstname: 'Andrew',
        wife: 'p02'
      },

      {
        _id: 'p02',
        generation: 0,
        gender: 'female',
        surname: 'Miller',
        firstname: 'Barbara',
        husband: 'p01'
      },

      {
        _id: 'p03',
        generation: 1,
        gender: 'male',
        surname: 'Green',
        firstname: 'Charles',
        children: ['p01']
      },

      {
        _id: 'p04',
        generation: 1,
        gender: 'female',
        surname: 'Wilson',
        firstname: 'Flora',
        children: ['p02']
      },
    ],

    rootPersonId: 'p01'
  };
});

it('addPerson() correctly adds a new mother', () => {
  const newMother = {
    _id: 'p88',
    surname: 'Sanders',
    firstname: 'Mary',
  };

  props.focusPersonId = 'p03';
  console.log(`LINE 67: props.people.length = ${props.people.length}`);
  const oldLength = props.people.length;
  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  instance.addPerson('mother', newMother);
  const mother = props.people[props.people.length - 1];
  const son = props.people.find(person => person._id === 'p33');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(mother._id).toEqual('p88');
  expect(mother.firstname).toEqual('Mary');
  expect(mother.children.length).toEqual(1);
  expect(mother.children[0]._id).toEqual('p33');
  expect(son.mother).toEqual('p88');
  expect(props.rootPersonId).toEqual('p88');
});

it('addPerson() correctly adds a new father', () => {

  const newFather = {
    _id: 'p98',
    surname: 'Stewart',
    firstname: 'Macdonald',
  };

  props.focusPersonId = 'p04';
  console.log(`LINE 93: props.people.length = ${props.people.length}`);
  const oldLength = props.people.length;
  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  instance.addPerson('father', newFather);
  const father = props.people[props.people.length - 1];
  const daughter = props.people.find(person => person._id === 'p22');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(father._id).toEqual('p98');
  expect(father.firstname).toEqual('Stewart');
  expect(father.children.length).toEqual(1);
  expect(father.children[0]._id).toEqual('p22');
  expect(daughter.father).toEqual('p98');
  expect(props.rootPersonId).toEqual('p98');
});

it('addPerson() correctly adds a new wife', () => {

  const newWife = {
    _id: 'p99',
    surname: 'Babbage',
    firstname: 'Patricia',
  };

  props.focusPersonId = 'p03';
  const oldLength = props.people.length;
  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  instance.addPerson('wife', newWife);
  const wife = props.people[props.people.length - 1];
  const husband = props.people.find(person => person._id === 'p98');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(wife._id).toEqual('p99');
  expect(wife.firstname).toEqual('Patricia');
  expect(wife.children.length).toEqual(1);
  expect(wife.children[0]._id).toEqual('p22');
  expect(husband.wife).toEqual('p98');
  expect(props.rootPersonId).toEqual('p99');
});

it('addPerson() correctly adds a new husband', () => {

  const newHusband = {
    _id: 'p89',
    surname: 'Wilson',
    firstname: 'Brady'
  };

  props.focusPersonId = 'p04';
  const oldLength = props.people.length;
  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  instance.addPerson('husband', newHusband);
  const husband = props.people[props.people.length - 1];
  const wife = props.people.find(person => person._id === 'p89');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(husband._id).toEqual('p89');
  expect(husband.firstname).toEqual('Brady');
  expect(husband.children.length).toEqual(1);
  expect(husband.children[0]._id).toEqual('p33');
  expect(husband.wife).toEqual('p88');
  expect(props.rootPersonId).toEqual('p89');
});

it('addPerson() correctly adds a new child', () => {

  const newChild = {
    _id: 'p90',
    gender: 'female',
    surname: 'Tammy',
    firstname: 'Green',
  };

  props.focusPersonId = 'p02';
  const oldLength = props.people.length;
  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  instance.addPerson('child', newChild);
  const child = props.people[props.people.length - 1];
  const mother = props.people.find(person => person._id === 'p07');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(child._id).toEqual('p90');
  expect(child.firstname).toEqual('Tammy');
  expect(child.children.length).toEqual(1);
  expect(mother.child).toEqual('p07');
  expect(props.rootPersonId).toEqual('p90');
});
