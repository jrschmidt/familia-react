import React, { Component } from 'react';
import './ChildRow.css';

import PersonMini from './PersonMini.js';

class ChildRow extends Component {

  render() {
    return (
      <div className="ChildRow">
      <h5>ChildRow</h5>
        {this.props.people.map( (person) =>
          <PersonMini person={person} key={person._id} />
        )}

      </div>
    )
  }

}

export default ChildRow;
