import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PersonDisplayTile from './PersonDisplayTile.js';

it('renders PersonDisplayTile component', () => {
    let props = {};
    let shallow = (<PersonDisplayTile {...props}/>);
});
