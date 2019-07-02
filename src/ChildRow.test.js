import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ChildRow from './ChildRow.js';

it('renders ChildRow component', () => {
    const props = {
      people: [
        {key: 'p01', surname: 'Green', firstname: 'Abby'},
        {key: 'p02', surname: 'Green', firstname: 'Babby'},
        {key: 'p03', surname: 'Green', firstname: 'Crabby'},
        {key: 'p04', surname: 'Green', firstname: 'Dabby'},
      ]
    };
    const wrapper = shallow(<ChildRow {...props}/>);
});
