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

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p03';
  expect(instance.findPersonById('p88')).toEqual(null);
  instance.addPerson('mother', newMother);
  expect(instance.findPersonById('p88')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const mother = instance.findPersonById('p88');
  const son = instance.findPersonById('p03');
  expect(mother.firstname).toEqual('Mary');
  expect(mother.generation).toEqual(2);
  expect(mother.gender).toEqual('female');
  expect(mother.children.length).toEqual(1);
  expect(mother.children[0]._id).toEqual('p03');
  expect(son.mother).toEqual('p88');
  expect(state.rootPersonId).toEqual('p88');
});

it('addPerson() correctly adds a new father', () => {

  const newFather = {
    _id: 'p98',
    surname: 'Wilson',
    firstname: 'Steven',
  };

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p04';
  expect(instance.findPersonById('p98')).toEqual(null);
  instance.addPerson('father', newFather);
  expect(instance.findPersonById('p98')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const father = instance.findPersonById('p98');
  const daughter = instance.findPersonById('p04');
  expect(father.firstname).toEqual('Steven');
  expect(father.generation).toEqual(2);
  expect(father.gender).toEqual('male');
  expect(father.children.length).toEqual(1);
  expect(father.children[0]._id).toEqual('p22');
  expect(daughter.father).toEqual('p98');
  expect(state.rootPersonId).toEqual('p98');
});

it('addPerson() correctly adds a new wife', () => {

  const newWife = {
    _id: 'p41',
    surname: 'Babbage',
    firstname: 'Patricia',
  };

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p03';
  expect(instance.findPersonById('p41')).toEqual(null);
  instance.addPerson('wife', newWife);
  expect(instance.findPersonById('p41')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const wife = instance.findPersonById('p41');
  const husband = instance.findPersonById('p03');
  expect(wife.firstname).toEqual('Patricia');
  expect(wife.generation).toEqual(1);
  expect(wife.gender).toEqual(female);
  expect(wife.children.length).toEqual(1);
  expect(wife.children[0]._id).toEqual('p01');
  expect(husband.wife).toEqual('p41');
  expect(state.rootPersonId).toEqual('p41');
});

it('addPerson() correctly adds a new husband', () => {

  const newHusband = {
    _id: 'p42',
    surname: 'Miller',
    firstname: 'Brady'
  };

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p04';
  expect(instance.findPersonById('p42')).toEqual(null);
  instance.addPerson('husband', newHusband);
  expect(instance.findPersonById('p42')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const husband = instance.findPersonById('p42');
  const wife = instance.findPersonById('p04');
  expect(husband.firstname).toEqual('Brady');
  expect(husband.generation).toEqual(1);
  expect(husband.gender).toEqual(male);
  expect(husband.children.length).toEqual(1);
  expect(husband.children[0]._id).toEqual('p02');
  expect(wife.husband).toEqual('p42');
  expect(state.rootPersonId).toEqual('p42');
});

it('addPerson() correctly adds a new child for childless persons', () => {

  const newChild = {
    _id: 'p18',
    gender: 'female',
    surname: 'Green',
    firstname: 'Tammy',
  };

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p02';
  expect(instance.findPersonById('p18')).toEqual(null);
  instance.addPerson('child', newChild);
  expect(instance.findPersonById('p18')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const child = instance.findPersonById('p18');
  const mother = instance.findPersonById('p02');
  const father = instance.findPersonById(mother.husband);
  expect(child.firstname).toEqual('Tammy');
  expect(child.generation).toEqual(-1);
  expect(mother.children.length).toEqual(1);
  expect(mother.children[0]._id).toEqual('p18');
  expect(father.children.length).toEqual(1);
  expect(father.children[0]._id).toEqual('p18');
  expect(state.rootPersonId).toEqual('p18');
});

it('addPerson() correctly adds a new child for persons with existing children', () => {

  const siblings = [
    {
      _id: 'p11',
      gender: 'female',
      surname: 'Green',
      firstname: 'Greta',
    },
    {
      _id: 'p11',
      gender: 'male',
      surname: 'Green',
      firstname: 'Michael',
    },
    {
      _id: 'p13',
      gender: 'male',
      surname: 'Green',
      firstname: 'Thomas',
    },
  ];

  const newChild = {
    _id: 'p18',
    gender: 'female',
    surname: 'Green',
    firstname: 'Tammy',
  };

  const wrapper = shallow(<TreeDisplay {...props}/>);
  const instance = wrapper.instance();
  let state = instance.state;

  const oldLength = state.people.length;
  state.focusPersonId = 'p02';
  const mother = instance.findPersonById('p02');
  const father = instance.findPersonById(mother.husband);
  mother.children = siblings;
  father.children = siblings;

  expect(instance.findPersonById('p18')).toEqual(null);
  instance.addPerson('child', newChild);
  expect(instance.findPersonById('p18')).not.toEqual(null);
  expect(state.people.length).toEqual(oldLength + 1);

  const child = instance.findPersonById('p18');
  expect(child.firstname).toEqual('Tammy');
  expect(child.generation).toEqual(-1);
  expect(mother.children.length).toEqual(4);
  expect(mother.children[3]._id).toEqual('p18');
  expect(father.children.length).toEqual(4);
  expect(father.children[3]._id).toEqual('p18');
  expect(state.rootPersonId).toEqual('p18');
});
