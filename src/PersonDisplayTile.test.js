import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonDisplayTile from './PersonDisplayTile.js';

it('renders PersonDisplayTile component', () => {
  const props = {
    person: {
      firstname: 'Albert',
      surname: 'Adams',
      birthdate: '04-aug-1958',
      birthPlaceName: 'Rolla, Missouri'
    }
  };
  const tag1 = <h3>Albert Adams</h3>;
  const tag2 = <p><span>birth</span> 04-aug-1958</p>;
  const tag3 = <p>Rolla, Missouri</p>;
  const wrapper = shallow(<PersonDisplayTile {...props}/>);
  expect(wrapper.contains(tag1)).toEqual(true);
  expect(wrapper.contains(tag2)).toEqual(true);
  expect(wrapper.contains(tag3)).toEqual(true);
});
