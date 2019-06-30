import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ChildRow from './ChildRow.js';

it('renders ChildRow component', () => {
    let props = {};
    const wrapper = shallow(<ChildRow {...props}/>);
});
