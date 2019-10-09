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
        father: 'p03',
        mother: 'p04',
        wife: 'p02',
        children: ['p07', 'p08', 'p09', 'p10']
      },

      {
        _id: 'p02',
        generation: 0,
        gender: 'female',
        surname: 'Miller',
        firstname: 'Barbara',
        father: 'p05',
        mother: 'p06',
        husband: 'p01',
        children: ['p07', 'p08', 'p09', 'p10']
      },

      {
        _id: 'p03',
        generation: 1,
        surname: 'Green',
        firstname: 'Charles',
        father: 'p21',
        mother: 'p22'
      },

      {
        _id: 'p04',
        generation: 1,
        surname: 'Davis',
        firstname: 'Debby',
        father: 'p23',
        mother: 'p24'
      },

      {
        _id: 'p05',
        generation: 1,
        surname: 'Miller',
        firstname: 'Edward',
        father: 'p31',
        mother: 'p32'
      },

      {
        _id: 'p06',
        generation: 1,
        surname: 'Wilson',
        firstname: 'Flora',
        father: 'p33',
        mother: 'p34'
      },

      {
        _id: 'p07',
        generation: -1,
        surname: 'Green',
        firstname: 'Gabby'
      },

      {
        _id: 'p08',
        generation: -1,
        surname: 'Green',
        firstname: 'Habby'
      },

      {
        _id: 'p09',
        generation: -1,
        surname: 'Green',
        firstname: 'Ibby'
      },

      {
        _id: 'p10',
        generation: -1,
        surname: 'Green',
        firstname: 'Jibby'
      },

      {
        _id: 'p21',
        generation: 2,
        surname: 'Green',
        firstname: 'James'
      },

      {
        _id: 'p22',
        generation: 2,
        surname: 'Macdonald',
        firstname: 'Teresa'
      },

      {
        _id: 'p23',
        generation: 2,
        surname: 'Davis',
        firstname: 'Herbert'
      },

      {
        _id: 'p24',
        generation: 2,
        surname: 'Anderson',
        firstname: 'Melissa'
      },

      {
        _id: 'p31',
        generation: 2,
        surname: 'Miller',
        firstname: 'Carl'
      },

      {
        _id: 'p32',
        generation: 2,
        surname: 'Gundersen',
        firstname: 'Wilma'
      },

      {
        _id: 'p33',
        generation: 2,
        surname: 'Wilson',
        firstname: 'Steven'
      },

      {
        _id: 'p34',
        generation: 2,
        surname: 'Hoffman',
        firstname: 'Nancy'
      }
    ],

    rootPersonId: 'p01'
  };
});


it('addPerson() correctly adds a new person', () => {
  // For this test, we add 5 people sequentially, as follows:
  // (1) A 'mother' for an existing person.
  // (2) A spouse ('husband') for the new person just added.
  // (3) A 'father' for a different existing person.
  // (4) A spouse ('wife') for the new person just added.
  // (5) A 'child' for a different existing person.

  const newMother = {
    _id: 'p88',
    surname: 'Sanders',
    firstname: 'Mary',
  };

  let oldLength, wrapper, instance;
  let father, mother, son, daughter, child, husband, wife;

  props.rootPersonId = 'p33';
  oldLength = props.people.length;
  wrapper = shallow(<TreeDisplay {...props}/>);
  instance = wrapper.instance();
  instance.addPerson('mother', newMother);
  mother = props.people[props.people.length - 1];
  son = props.people.find(person => person._id === 'p33');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(mother._id).toEqual('p88');
  expect(mother.firstname).toEqual('Mary');
  expect(mother.children.length).toEqual(1);
  expect(mother.children[0]._id).toEqual('p33');
  expect(son.mother).toEqual('p88');
  expect(props.rootPersonId).toEqual('p88');

  const newHusband = {
    _id: 'p89',
    surname: 'Wilson',
    firstname: 'Brady'
  };

  oldLength = props.people.length;
  wrapper = shallow(<TreeDisplay {...props}/>);
  instance = wrapper.instance();
  instance.addPerson('husband', newHusband);
  husband = props.people[props.people.length - 1];
  wife = props.people.find(person => person._id === 'p89');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(husband._id).toEqual('p89');
  expect(husband.firstname).toEqual('Brady');
  expect(husband.children.length).toEqual(1);
  expect(husband.children[0]._id).toEqual('p33');
  expect(husband.wife).toEqual('p88');
  expect(props.rootPersonId).toEqual('p89');

  const newFather = {
    _id: 'p98',
    surname: 'Stewart',
    firstname: 'Macdonald',
  };

  oldLength = props.people.length;
  wrapper = shallow(<TreeDisplay {...props}/>);
  instance = wrapper.instance();
  instance.addPerson('father', newFather);
  father = props.people[props.people.length - 1];
  daughter = props.people.find(person => person._id === 'p22');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(father._id).toEqual('p98');
  expect(father.firstname).toEqual('Stewart');
  expect(father.children.length).toEqual(1);
  expect(father.children[0]._id).toEqual('p22');
  expect(daughter.father).toEqual('p98');
  expect(props.rootPersonId).toEqual('p98');

  const newWife = {
    _id: 'p99',
    surname: 'Babbage',
    firstname: 'Patricia',
  };

  oldLength = props.people.length;
  wrapper = shallow(<TreeDisplay {...props}/>);
  instance = wrapper.instance();
  instance.addPerson('wife', newWife);
  wife = props.people[props.people.length - 1];
  husband = props.people.find(person => person._id === 'p98');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(wife._id).toEqual('p99');
  expect(wife.firstname).toEqual('Patricia');
  expect(wife.children.length).toEqual(1);
  expect(wife.children[0]._id).toEqual('p22');
  expect(husband.wife).toEqual('p98');
  expect(props.rootPersonId).toEqual('p99');

  const newChild = {
    _id: 'p90',
    gender: 'female',
    surname: 'Tammy',
    firstname: 'Green',
  };

  oldLength = props.people.length;
  wrapper = shallow(<TreeDisplay {...props}/>);
  instance = wrapper.instance();
  instance.addPerson('child', newChild);
  child = props.people[props.people.length - 1];
  mother = props.people.find(person => person._id === 'p07');

  expect(props.people.length).toEqual(oldLength + 1);
  expect(child._id).toEqual('p90');
  expect(child.firstname).toEqual('Tammy');
  expect(child.children.length).toEqual(1);
  expect(mother.child).toEqual('p07');
  expect(props.rootPersonId).toEqual('p90');
});
