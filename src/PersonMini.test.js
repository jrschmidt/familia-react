import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonMini from './PersonMini.js';

it('renders PersonMini component', () => {
    let props = {
      person: {firstname: 'Albert', surname: 'Adams'}
    };
    const wrapper = shallow(<PersonMini {...props}/>);
});
