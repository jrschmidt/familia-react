import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplay3Gen from './TreeDisplay3Gen.js';
import TreeDisplayCore from './TreeDisplayCore.js';
import ChildView from './ChildView.js';

let props = {}

beforeAll( () => {
  props = {

    people: [
      {
        _id: 'p01',
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
        gender: 'female',
        surname: 'Miller',
        firstname: 'Barbara',
        father: 'p05',
        mother: 'p06',
        husband: 'p01',
        children: ['p07', 'p08', 'p09', 'p10']
      },

      {_id: 'p03', surname: 'Green', firstname: 'Charles'},
      {_id: 'p04', surname: 'Davis', firstname: 'Debby'},
      {_id: 'p05', surname: 'Miller', firstname: 'Edward'},
      {_id: 'p06', surname: 'Wilson', firstname: 'Flora'},
      {_id: 'p07', surname: 'Green', firstname: 'Gabby'},
      {_id: 'p08', surname: 'Green', firstname: 'Habby'},
      {_id: 'p09', surname: 'Green', firstname: 'Ibby'},
      {_id: 'p10', surname: 'Green', firstname: 'Jibby'}
    ],

    focusPersonId: null
  };
});

it('renders TreeDisplay3Gen component', () => {
  props.focusPersonId = 'p01';
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  expect(wrapper.find(TreeDisplayCore)).toHaveLength(1);
  expect(wrapper.find(ChildView)).toHaveLength(1);
});

it('getViewState() generates correct state data for male focus person', () => {
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  const instance = wrapper.instance();
  const results = instance.getViewState('p01');

  expect(results.focusPerson._id).toEqual('p01');
  expect(results.focusPerson.firstname).toEqual('Andrew');
  expect(results.focusPersonGender).toEqual('male');
  expect(results.husband).toBeFalsy();
  expect(results.wife._id).toEqual('p02');
  expect(results.wife.firstname).toEqual('Barbara');
  expect(results.fatherOfMale._id).toEqual('p03');
  expect(results.fatherOfMale.firstname).toEqual('Charles');
  expect(results.motherOfMale._id).toEqual('p04');
  expect(results.motherOfMale.firstname).toEqual('Debby');
  expect(results.fatherOfFemale._id).toEqual('p05');
  expect(results.fatherOfFemale.firstname).toEqual('Edward');
  expect(results.motherOfFemale._id).toEqual('p06');
  expect(results.motherOfFemale.firstname).toEqual('Flora');
  expect(results.children.length).toEqual(4);
  expect(results.children[0].firstname).toEqual('Gabby');
  expect(results.children[1].firstname).toEqual('Habby');
  expect(results.children[2].firstname).toEqual('Ibby');
  expect(results.children[3].firstname).toEqual('Jibby');
});

it('getViewState() generates correct state data for female focus person', () => {
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  const instance = wrapper.instance();
  const results = instance.getViewState('p02');

  expect(results.focusPerson._id).toEqual('p02');
  expect(results.focusPerson.firstname).toEqual('Barbara');
  expect(results.focusPersonGender).toEqual('female');
  expect(results.wife).toBeFalsy();
  expect(results.husband._id).toEqual('p01');
  expect(results.husband.firstname).toEqual('Andrew');
  expect(results.fatherOfMale._id).toEqual('p03');
  expect(results.fatherOfMale.firstname).toEqual('Charles');
  expect(results.motherOfMale._id).toEqual('p04');
  expect(results.motherOfMale.firstname).toEqual('Debby');
  expect(results.fatherOfFemale._id).toEqual('p05');
  expect(results.fatherOfFemale.firstname).toEqual('Edward');
  expect(results.motherOfFemale._id).toEqual('p06');
  expect(results.motherOfFemale.firstname).toEqual('Flora');
  expect(results.children.length).toEqual(4);
  expect(results.children[0].firstname).toEqual('Gabby');
  expect(results.children[1].firstname).toEqual('Habby');
  expect(results.children[2].firstname).toEqual('Ibby');
  expect(results.children[3].firstname).toEqual('Jibby');
});

it('getViewState() generates correct state data when switching between multiple focus persons', () => {
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  const instance = wrapper.instance();
  let results;

  results = instance.getViewState('p02');
  expect(results.focusPerson.firstname).toEqual('Barbara');
  expect(results.wife).toBeFalsy();
  expect(results.husband.firstname).toEqual('Andrew');

  results = instance.getViewState('p01');
  expect(results.focusPerson.firstname).toEqual('Andrew');
  expect(results.husband).toBeFalsy();
  expect(results.wife.firstname).toEqual('Barbara');

  results = instance.getViewState('p02');
  expect(results.focusPerson.firstname).toEqual('Barbara');
  expect(results.wife).toBeFalsy();
  expect(results.husband.firstname).toEqual('Andrew');
});

it('correctly passes props to TreeDisplayCore when focus person is male', () => {
  props.focusPersonId = 'p01';
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  const tdcWrapper = wrapper.find(TreeDisplayCore);

  expect(tdcWrapper.prop('focusPerson')._id).toEqual('p01');
  expect(tdcWrapper.prop('focusPerson').firstname).toEqual('Andrew');
  expect(tdcWrapper.prop('husband')).toEqual(null);
  expect(tdcWrapper.prop('wife')._id).toEqual('p02');
  expect(tdcWrapper.prop('wife').firstname).toEqual('Barbara');
  expect(tdcWrapper.prop('fatherOfMale')._id).toEqual('p03');
  expect(tdcWrapper.prop('fatherOfMale').firstname).toEqual('Charles');
  expect(tdcWrapper.prop('motherOfMale')._id).toEqual('p04');
  expect(tdcWrapper.prop('motherOfMale').firstname).toEqual('Debby');
  expect(tdcWrapper.prop('fatherOfFemale')._id).toEqual('p05');
  expect(tdcWrapper.prop('fatherOfFemale').firstname).toEqual('Edward');
  expect(tdcWrapper.prop('motherOfFemale')._id).toEqual('p06');
  expect(tdcWrapper.prop('motherOfFemale').firstname).toEqual('Flora');
});

it('correctly passes props to TreeDisplayCore when focus person is female', () => {
  props.focusPersonId = 'p02';
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
  const tdcWrapper = wrapper.find(TreeDisplayCore);

  expect(tdcWrapper.prop('focusPerson')._id).toEqual('p02');
  expect(tdcWrapper.prop('focusPerson').firstname).toEqual('Barbara');
  expect(tdcWrapper.prop('husband')._id).toEqual('p01');
  expect(tdcWrapper.prop('husband').firstname).toEqual('Andrew');
  expect(tdcWrapper.prop('wife')).toEqual(null);
  expect(tdcWrapper.prop('fatherOfMale')._id).toEqual('p03');
  expect(tdcWrapper.prop('fatherOfMale').firstname).toEqual('Charles');
  expect(tdcWrapper.prop('motherOfMale')._id).toEqual('p04');
  expect(tdcWrapper.prop('motherOfMale').firstname).toEqual('Debby');
  expect(tdcWrapper.prop('fatherOfFemale')._id).toEqual('p05');
  expect(tdcWrapper.prop('fatherOfFemale').firstname).toEqual('Edward');
  expect(tdcWrapper.prop('motherOfFemale')._id).toEqual('p06');
  expect(tdcWrapper.prop('motherOfFemale').firstname).toEqual('Flora');
});
