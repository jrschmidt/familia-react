import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonMiniAdd from './PersonMiniAdd.js';

it('renders PersonMiniAdd component', () => {
  const props = {};
  const wrapper = shallow(<PersonMiniAdd {...props}/>);
  expect(wrapper.find('span').html()).toEqual('<span>Add Person ...</span>');
});
