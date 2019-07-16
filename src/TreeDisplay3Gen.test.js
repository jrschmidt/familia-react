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

it('correctly generates state for TreeDisplay3Gen component with male focus person', () => {
  props.focusPersonId = 'p01';
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);

  expect(wrapper.state().focusPerson._id).toEqual('p01');
  expect(wrapper.state().focusPerson.firstname).toEqual('Andrew');
  expect(wrapper.state().focusPersonGender).toEqual('male');
  expect(wrapper.state().husband).toBeFalsy();
  expect(wrapper.state().wife._id).toEqual('p02');
  expect(wrapper.state().wife.firstname).toEqual('Barbara');
  expect(wrapper.state().fatherOfMale._id).toEqual('p03');
  expect(wrapper.state().fatherOfMale.firstname).toEqual('Charles');
  expect(wrapper.state().motherOfMale._id).toEqual('p04');
  expect(wrapper.state().motherOfMale.firstname).toEqual('Debby');
  expect(wrapper.state().fatherOfFemale._id).toEqual('p05');
  expect(wrapper.state().fatherOfFemale.firstname).toEqual('Edward');
  expect(wrapper.state().motherOfFemale._id).toEqual('p06');
  expect(wrapper.state().motherOfFemale.firstname).toEqual('Flora');
  expect(wrapper.state().children.length).toEqual(4);
  expect(wrapper.state().children[0].firstname).toEqual('Gabby');
  expect(wrapper.state().children[1].firstname).toEqual('Habby');
  expect(wrapper.state().children[2].firstname).toEqual('Ibby');
  expect(wrapper.state().children[3].firstname).toEqual('Jibby');
});

it('correctly generates state for TreeDisplay3Gen component with female focus person', () => {
  props.focusPersonId = 'p02';
  const wrapper = shallow(<TreeDisplay3Gen {...props}/>);

  expect(wrapper.state().focusPerson._id).toEqual('p02');
  expect(wrapper.state().focusPerson.firstname).toEqual('Barbara');
  expect(wrapper.state().focusPersonGender).toEqual('female');
  expect(wrapper.state().wife).toBeFalsy();
  expect(wrapper.state().husband._id).toEqual('p01');
  expect(wrapper.state().husband.firstname).toEqual('Andrew');
  expect(wrapper.state().fatherOfMale._id).toEqual('p03');
  expect(wrapper.state().fatherOfMale.firstname).toEqual('Charles');
  expect(wrapper.state().motherOfMale._id).toEqual('p04');
  expect(wrapper.state().motherOfMale.firstname).toEqual('Debby');
  expect(wrapper.state().fatherOfFemale._id).toEqual('p05');
  expect(wrapper.state().fatherOfFemale.firstname).toEqual('Edward');
  expect(wrapper.state().motherOfFemale._id).toEqual('p06');
  expect(wrapper.state().motherOfFemale.firstname).toEqual('Flora');
  expect(wrapper.state().children.length).toEqual(4);
  expect(wrapper.state().children[0].firstname).toEqual('Gabby');
  expect(wrapper.state().children[1].firstname).toEqual('Habby');
  expect(wrapper.state().children[2].firstname).toEqual('Ibby');
  expect(wrapper.state().children[3].firstname).toEqual('Jibby');
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
