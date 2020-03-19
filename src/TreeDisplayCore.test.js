import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayCore from './TreeDisplayCore.js';
import FocusPersonDisplay from './FocusPersonDisplay.js';
import PersonMini from './PersonMini.js';

it('renders TreeDisplayCore component with male focus person', () => {
    const props = {
      focusPerson: {_id: 'p01', gender: 'male', firstname: 'Robert', surname: 'Green', birthdate: 'aug-07-1958', birthPlaceName: 'Mt Vernon, Illinois'},
      husband: null,
      wife: {_id: 'p03', firstname: 'Anne', surname: 'Adams'},
      father: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      mother: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherOfFather: {_id: 'p11', firstname: 'Michael', surname: 'Green'},
      motherOfFather: {_id: 'p12', firstname: 'Elizabeth', surname: 'Carter'},
      fatherOfMother: {_id: 'p13', firstname: 'Albert', surname: 'Johnson'},
      motherOfMother: {_id: 'p14', firstname: 'Susanna', surname: 'Kirk'},
      children: [
        {_id: 'p98', firstname: 'Melissa', surname: 'Green'},
        {_id: 'p99', firstname: 'Jordan', surname: 'Green'}
      ]
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(FocusPersonDisplay)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(9);
    expect(wrapper.find('svg')).toHaveLength(5);
    expect(wrapper.find('svg').last().hasClass('svg-children')).toEqual(true);
});

it('renders TreeDisplayCore component with female focus person', () => {
    const props = {
      focusPerson: {_id: 'p03', gender: 'female', firstname: 'Anne', surname: 'Adams', birthdate: 'may-26-1959', birthPlaceName: 'Lenexa, Kansas'},
      husband: {_id: 'p01', firstname: 'Robert', surname: 'Green'},
      wife: null,
      father: {_id: 'p06', firstname: 'Zane', surname: 'Adams'},
      mother: {_id: 'p07', firstname: 'Allison', surname: 'Medford'},
      fatherOfFather: {_id: 'p21', firstname: 'Jeremiah', surname: 'Adams'},
      motherOfFather: {_id: 'p22', firstname: 'Roberta', surname: 'Vogel'},
      fatherOfMother: {_id: 'p23', firstname: 'Vernon', surname: 'Medford'},
      motherOfMother: {_id: 'p24', firstname: 'Lucille', surname: 'Williams'},
      children: [
        {_id: 'p98', firstname: 'Melissa', surname: 'Green'},
        {_id: 'p99', firstname: 'Jordan', surname: 'Green'}
      ]
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(FocusPersonDisplay)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(9);
    expect(wrapper.find('svg')).toHaveLength(5);
    expect(wrapper.find('svg').last().hasClass('svg-children')).toEqual(true);
});
