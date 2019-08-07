import React, { Component } from 'react';
import './ChildView.css';

import ChildRow from './ChildRow.js';

class ChildView extends Component {

  constructor (props) {
    super(props);
    this.numberOfRows = 0;
  }

  getRowNumber () {
    this.numberOfRows += 1;
    return this.numberOfRows;
  }

  makeChildRow (persons, positionTags, svgConnectorTag) {
    // A full row of 4 persons has positions designated by tags child-1, child-2,
    // child-3, child-4. The tags child-left, child-middle, and child-right
    // designate positions in between these 4.
    let row = <ChildRow
      resetViewFocus={this.props.resetViewFocus}
      key={this.getRowNumber()}
      people={persons}
      viewRoleTags={positionTags}
      rowType={svgConnectorTag}
    />
    return row;
  }

  getChildRows (people) {
    // If this method is passed an array with 1, 2, 3 or 4 persons, it generates
    // a single ChildRow component. If it is passed more than 4 persons, it
    // places them into ChildRow components 4 at a time until there are 4 or
    // fewer persons left, then generates a final row for the remaining persons.

    const rows = [];
    let kidsToAdd = Array.from(people);

    if (kidsToAdd.length === 1) rows.push( this.makeChildRow(
        [ kidsToAdd.shift() ],
        [ 'child-middle' ],
        'single-1' ));

    if (kidsToAdd.length === 2) rows.push( this.makeChildRow(
      [ kidsToAdd.shift(), kidsToAdd.shift() ],
      [ 'child-2', 'child-3' ],
      'single-2' ));

    if (kidsToAdd.length === 3) rows.push( this.makeChildRow(
      [ kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift() ],
      [ 'child-left', 'child-middle', 'child-right' ],
      'single-3' ));

    while (kidsToAdd.length > 4) rows.push( this.makeChildRow(
        [ kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift() ],
        [ 'child-1', 'child-2', 'child-3', 'child-4' ],
        'extend-4' ));

    if (kidsToAdd.length === 1) rows.push( this.makeChildRow(
      [ kidsToAdd.shift() ],
      [ 'child-1' ],
      'final-1' ));

    if (kidsToAdd.length === 2) rows.push( this.makeChildRow(
      [ kidsToAdd.shift(), kidsToAdd.shift() ],
      [ 'child-1', 'child-2' ],
      'final-2' ));

    if (kidsToAdd.length === 3) rows.push( this.makeChildRow(
      [ kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift() ],
      [ 'child-1', 'child-2', 'child-3' ],
      'final-3' ));

    if (kidsToAdd.length === 4) rows.push( this.makeChildRow(
      [ kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift() ],
      [ 'child-1', 'child-2', 'child-3', 'child-4' ],
      'final-4' ));

    return rows;
  }

  render() {
    return (
      this.props.children ?
        <div className="ChildView">
        {this.getChildRows(this.props.children)}
        </div>
      :
        <></>
    )
  }

}

export default ChildView;
