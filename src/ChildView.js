import React, { Component } from 'react';
import './ChildView.css';

import ChildRow from './ChildRow.js';

class ChildView extends Component {

  getChildRows (people) {
    // This method places people passed to it into ChildRow components 3 at a time
    // until there are 4 or fewer persons left, then generates a final row or two
    // for the remaining 2, 3 or 4 persons. If it is passed an array with only one
    // person in it, this is a special case and a special one person row is
    // generated.

    const rows = [];
    let kidsToAdd = Array.from(people);

    if (kidsToAdd.length === 1)
      return [ <ChildRow extend='false' people={[ kidsToAdd[0] ]} /> ];

    while (kidsToAdd.length > 4) {
      rows.push( <ChildRow extend='true' people={[kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift()]} /> );
    }

    if (kidsToAdd.length === 2) {
      rows.push( <ChildRow extend='false' people={[kidsToAdd.shift(), kidsToAdd.shift()]} /> );
    }

    if (kidsToAdd.length === 3) {
      rows.push( <ChildRow extend='false' people={[kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift()]} /> );
    }

    if (kidsToAdd.length === 4) {
      rows.push( <ChildRow extend='true' people={[kidsToAdd.shift(), kidsToAdd.shift()]} /> );
      rows.push( <ChildRow extend='false' people={[kidsToAdd.shift(), kidsToAdd.shift()]} /> );
    }

    return rows;
  }

  render() {
    return (
      <div className="ChildView">
      <h5>ChildView</h5>
      {this.getChildRows(this.props.children)}
      </div>
    )
  }

}

export default ChildView;
