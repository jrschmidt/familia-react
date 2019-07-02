import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonMini from './PersonMini.js';

it('renders PersonMini component', () => {
    const props = {
      person: {firstname: 'Albert', surname: 'Adams'}
    };
    const tag1 = <h4>Albert Adams</h4>
    const wrapper = shallow(<PersonMini {...props}/>);
    expect(wrapper.contains(tag1)).toEqual(true);
});
