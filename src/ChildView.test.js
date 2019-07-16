import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ChildRow from './ChildRow.js';
import ChildView from './ChildView.js';

const peopleSource = [
  {key: 'p01', surname: 'Green', firstname: 'Abby'},
  {key: 'p02', surname: 'Green', firstname: 'Babby'},
  {key: 'p03', surname: 'Green', firstname: 'Crabby'},
  {key: 'p04', surname: 'Green', firstname: 'Dabby'},
  {key: 'p05', surname: 'Green', firstname: 'Ebby'},
  {key: 'p06', surname: 'Green', firstname: 'Febby'},
  {key: 'p07', surname: 'Green', firstname: 'Gabby'},
  {key: 'p08', surname: 'Green', firstname: 'Habby'},
  {key: 'p09', surname: 'Green', firstname: 'Ibby'},
  {key: 'p10', surname: 'Green', firstname: 'Jibby'},
  {key: 'p11', surname: 'Green', firstname: 'Kibby'},
  {key: 'p12', surname: 'Green', firstname: 'Libby'},
  {key: 'p13', surname: 'Green', firstname: 'Mobby'},
  {key: 'p14', surname: 'Green', firstname: 'Nobby'},
  {key: 'p15', surname: 'Green', firstname: 'Obby'}
];

for (let i=0; i<15; i++) {
  let numberOfPersons = i<1 ? '1 person' : `${String(i + 1)} persons`;
  it(`renders ChildView component with ${numberOfPersons}`, () => {
    const props = {children: peopleSource.slice(0,i + 1)};
    const wrapper = shallow(<ChildView {...props}/>);
    const wrapperChildRow = wrapper.find(ChildRow);
    expect(wrapperChildRow).toHaveLength(Math.floor(i/4) + 1);

    for (let n=0; n<i; n++) {
      expect(wrapperChildRow.at(Math.floor(n/4)).prop('people')[n%4].firstname)
      .toEqual(peopleSource[n].firstname);
    }

    if (i === 0) expect(wrapperChildRow.first().prop('rowType')).toEqual('single-1');
    if (i === 1) expect(wrapperChildRow.first().prop('rowType')).toEqual('single-2');
    if (i === 2) expect(wrapperChildRow.first().prop('rowType')).toEqual('single-3');

    expect(wrapperChildRow.find( {rowType: 'extend-4'} )).toHaveLength(Math.floor(i/4));

    if (i > 2) {
      if ( 0 === i % 4 ) expect(wrapperChildRow.last().prop('rowType')).toEqual('final-1');
      if ( 1 === i % 4 ) expect(wrapperChildRow.last().prop('rowType')).toEqual('final-2');
      if ( 2 === i % 4 ) expect(wrapperChildRow.last().prop('rowType')).toEqual('final-3');
      if ( 3 === i % 4 ) expect(wrapperChildRow.last().prop('rowType')).toEqual('final-4');
    }

  });
}
