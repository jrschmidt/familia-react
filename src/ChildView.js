import React, { Component } from 'react';
import './ChildView.css';

import ChildRow from './ChildRow.js';

class ChildView extends Component {

  getChildRows (people) {
    const rows = [];
    let kidsToAdd = Array.from(people);
    while (kidsToAdd.length > 4) {
      rows.push( <ChildRow people={[kidsToAdd.shift(), kidsToAdd.shift(), kidsToAdd.shift()]} /> );
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
