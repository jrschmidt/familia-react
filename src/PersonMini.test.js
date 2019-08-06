import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonMini from './PersonMini.js';

it('renders PersonMini component', () => {
  const props = {
    person: {firstname: 'Albert', surname: 'Adams'}
  };
  const wrapper = shallow(<PersonMini {...props}/>);
  expect(wrapper.find('span').html()).toEqual('<span>Albert Adams</span>');
});
