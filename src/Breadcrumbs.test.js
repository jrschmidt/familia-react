import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Breadcrumbs from './Breadcrumbs.js';

it('renders Breadcrumbs component with correct names', () => {
  let props, wrapper;

  props = {
    names: [
      'Adam Smith'
    ]
  };
  wrapper = shallow(<Breadcrumbs {...props}/>);
  expect(wrapper.contains('ROOT: Adam Smith')).toEqual(true);

  props = {
    names: [
      'Adam Smith',
      'Margaret Johnson'
    ]
  };
  wrapper = shallow(<Breadcrumbs {...props}/>);
  expect(wrapper.contains('ROOT: Adam Smith >> Margaret Johnson')).toEqual(true);

  props = {
    names: [
      'Adam Smith',
      'Margaret Johnson',
      'Brian Johnson'
    ]
  };
  wrapper = shallow(<Breadcrumbs {...props}/>);
  expect(wrapper.contains('ROOT: Adam Smith >> Margaret Johnson >> Brian Johnson')).toEqual(true);

});
