import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeDisplayCore from './TreeDisplayCore.js';
import FocusPersonDisplayTile from './FocusPersonDisplayTile.js';
import PersonMini from './PersonMini.js';

it('renders TreeDisplayCore component with male focus person', () => {
    const props = {
      focusPerson: {_id: 'p01', gender: 'male', firstname: 'Robert', surname: 'Green', birthdate: 'aug-07-1958', birthPlaceName: 'Mt Vernon, Illinois'},
      husband: null,
      wife: {_id: 'p03', firstname: 'Anne', surname: 'Adams'},

      fatherOfMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherOfMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherOfFatherOfMale: {_id: 'p11', firstname: 'Michael', surname: 'Green'},
      motherOfFatherOfMale: {_id: 'p12', firstname: 'Elizabeth', surname: 'Carter'},
      fatherOfMotherOfMale: {_id: 'p13', firstname: 'Albert', surname: 'Johnson'},
      motherOfMotherOfMale: {_id: 'p14', firstname: 'Susanna', surname: 'Kirk'},

      fatherOfFemale: {_id: 'p06', firstname: '', surname: 'Adams'},
      motherOfFemale: {_id: 'p07', firstname: '', surname: 'Medford'},
      fatherOfFatherOfFemale: {_id: 'p21', firstname: 'Jeremiah', surname: 'Adams'},
      motherOfFatherOfFemale: {_id: 'p22', firstname: 'Roberta', surname: 'Vogel'},
      fatherOfMotherOfFemale: {_id: 'p23', firstname: 'Vernon', surname: 'Medford'},
      motherOfMotherOfFemale: {_id: 'p24', firstname: 'Lucille', surname: 'Williams'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(FocusPersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(13);
    expect(wrapper.find('svg')).toHaveLength(7);
    expect(wrapper.find('svg').last().hasClass('connect-parents-children')).toEqual(true);
});

it('renders TreeDisplayCore component with female focus person', () => {
    const props = {
      focusPerson: {_id: 'p03', gender: 'female', firstname: 'Anne', surname: 'Adams', birthdate: 'may-26-1959', birthPlaceName: 'Lenexa, Kansas'},
      husband: {_id: 'p01', firstname: 'Robert', surname: 'Green'},
      wife: null,

      fatherOfMale: {_id: 'p04', firstname: 'Thomas', surname: 'Green'},
      motherOfMale: {_id: 'p05', firstname: 'Barbara', surname: 'Johnson'},
      fatherOfFatherOfMale: {_id: 'p11', firstname: 'Michael', surname: 'Green'},
      motherOfFatherOfMale: {_id: 'p12', firstname: 'Elizabeth', surname: 'Carter'},
      fatherOfMotherOfMale: {_id: 'p13', firstname: 'Albert', surname: 'Johnson'},
      motherOfMotherOfMale: {_id: 'p14', firstname: 'Susanna', surname: 'Kirk'},

      fatherOfFemale: {_id: 'p06', firstname: '', surname: 'Adams'},
      motherOfFemale: {_id: 'p07', firstname: '', surname: 'Medford'},
      fatherOfFatherOfFemale: {_id: 'p21', firstname: 'Jeremiah', surname: 'Adams'},
      motherOfFatherOfFemale: {_id: 'p22', firstname: 'Roberta', surname: 'Vogel'},
      fatherOfMotherOfFemale: {_id: 'p23', firstname: 'Vernon', surname: 'Medford'},
      motherOfMotherOfFemale: {_id: 'p24', firstname: 'Lucille', surname: 'Williams'}
    };
    const wrapper = shallow(<TreeDisplayCore {...props}/>);
    expect(wrapper.find(FocusPersonDisplayTile)).toHaveLength(1);
    expect(wrapper.find(PersonMini)).toHaveLength(13);
    expect(wrapper.find('svg')).toHaveLength(7);
    expect(wrapper.find('svg').last().hasClass('connect-parents-children')).toEqual(true);
});
