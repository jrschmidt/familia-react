import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayHeader from './TreeDisplayHeader.js';

it('renders TreeDisplayHeader component', () => {
    let props = {};
    const wrapper = shallow(<TreeDisplayHeader {...props}/>);
});
