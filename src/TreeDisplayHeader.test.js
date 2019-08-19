import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayHeader from './TreeDisplayHeader.js';

it('renders TreeDisplayHeader component', () => {
    const props = {
      headline: 'Familia-React',
      tagline1: 'Tree Display Component',
      tagline2: '3 Generation Version',
      text: 'This is the Tree Display Header text.'
    };
    const tag1 = <h5>Familia-React</h5>;
    const tag2 = <h6>Tree Display Component</h6>;
    const tag3 = <h6>3 Generation Version</h6>;
    const tag4 = <p>This is the Tree Display Header text.</p>;
    const wrapper = shallow(<TreeDisplayHeader {...props}/>);
    expect(wrapper.contains(tag1)).toEqual(true);
    expect(wrapper.contains(tag2)).toEqual(true);
    expect(wrapper.contains(tag3)).toEqual(true);
    expect(wrapper.contains(tag4)).toEqual(true);
});
