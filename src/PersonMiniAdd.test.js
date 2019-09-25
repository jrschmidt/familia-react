import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonMiniAdd from './PersonMiniAdd.js';

it('renders PersonMiniAdd component', () => {
  const props = {label: 'father'};
  const wrapper = shallow(<PersonMiniAdd {...props}/>);
});
