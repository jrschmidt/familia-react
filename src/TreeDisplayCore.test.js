import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayCore from './TreeDisplayCore.js';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

it('renders TreeDisplayCore component with male focus person', () => {
    const props = {
      focusPerson: {_id: 'p01', gender: 'male', firstname: 'Robert', surname: 'Green', birthdate: 'aug-07-1958', birthPlaceName: 'Mt Vernon, Illinois'},
      husband: null,
      wife: {_id: 'p03', firstname: 'Anne', surname: 'Adams'},
      fatherOfMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherOfMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherOfFemale: {_id: 'p06', firstname: 'Michael', surname: 'Adams'},
      motherOfFemale: {_id: 'p07', firstname: 'Elizabeth', surname: 'Carter'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(PersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(5);
    expect(wrapper.find('svg')).toHaveLength(3);
    expect(wrapper.find('svg').last().hasClass('connect-children-male')).toEqual(true);
});

it('renders TreeDisplayCore component with female focus person', () => {
    const props = {
      focusPerson: {_id: 'p03', gender: 'female', firstname: 'Anne', surname: 'Adams', birthdate: 'may-26-1959', birthPlaceName: 'Lenexa, Kansas'},
      husband: {_id: 'p01', firstname: 'Robert', surname: 'Green'},
      wife: null,
      fatherOfMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherOfMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherOfFemale: {_id: 'p06', firstname: 'Michael', surname: 'Adams'},
      motherOfFemale: {_id: 'p07', firstname: 'Elizabeth', surname: 'Carter'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(PersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(5);
    expect(wrapper.find('svg')).toHaveLength(3);
    expect(wrapper.find('svg').last().hasClass('connect-children-female')).toEqual(true);
});
