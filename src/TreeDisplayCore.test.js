import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayCore from './TreeDisplayCore.js';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

it('renders TreeDisplayCore component with male focus person', () => {
    const props = {
      focusPerson: {_id: 'p01', firstname: 'Robert', surname: 'Green', birthdate: 'aug-07-1958', birthPlaceName: 'Mt Vernon, Illinois'},
      husband: null,
      wife: {_id: 'p03', firstname: 'Anne', surname: 'Adams'},
      fatherMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherFemale: {_id: 'p06', firstname: 'Michael', surname: 'Adams'},
      motherFemale: {_id: 'p07', firstname: 'Elizabeth', surname: 'Carter'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(PersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(5);
});

it('renders TreeDisplayCore component with female focus person', () => {
    const props = {
      focusPerson: {_id: 'p03', firstname: 'Anne', surname: 'Adams', birthdate: 'may-26-1959', birthPlaceName: 'Lenexa, Kansas'},
      husband: {_id: 'p01', firstname: 'Robert', surname: 'Green'},
      wife: null,
      fatherMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherFemale: {_id: 'p06', firstname: 'Michael', surname: 'Adams'},
      motherFemale: {_id: 'p07', firstname: 'Elizabeth', surname: 'Carter'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(PersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(5);
});
