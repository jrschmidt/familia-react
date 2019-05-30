import React, { Component } from 'react';
import './ChildView.css';

import PersonMini from './PersonMini.js';

class ChildView extends Component {

  render() {
    return (
      <div className="ChildView">
      <h5>ChildView</h5>
        {this.props.children.map( (person) =>
          <PersonMini person={person} key={person._id} />
        )}

      </div>
    )
  }

}

export default ChildView;
