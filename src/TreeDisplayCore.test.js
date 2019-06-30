import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayCore from './TreeDisplayCore.js';

it('renders TreeDisplayCore component', () => {
    let props = {};
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
});
