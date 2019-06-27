import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
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

it('renders ChildView component', () => {
  for (let i=0; i<15; i++) {
    let props = {children: peopleSource.slice(0,i + 1)};
    let shallow = (<ChildView {...props}/>);
  }
});





  // Test that for any number of children between 1 and 15:
  //   the correct number of rows is generated,
  //   the last row contains the correct number of children,
  //   any other rows each contain 4 children.

  // for (let i=0; i<15; i++) {
  //   console.log(`i = ${i}`);
  //   const cv = new ChildView();
  //   let people = peopleSource.slice(0,i+1);
  //   const cvRows = cv.getChildRows(people);
  //   expect(cvRows.length).toEqual( Math.floor(i/4) + 1 );
  //   expect(cvRows.pop().props.people.length).toEqual(i % 4);
  //   expect(cvRows.every( (row) => row.length === 4 )).toEqual(true);
  // }
