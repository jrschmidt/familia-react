import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplay3Gen from './TreeDisplay3Gen.js';

it('renders TreeDisplay3Gen component', () => {
    const props = {};
    const wrapper = shallow(<TreeDisplay3Gen {...props}/>);
});
