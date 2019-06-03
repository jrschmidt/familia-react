import React, { Component } from 'react';
import './ChildView.css';

import ChildRow from './ChildRow.js';

class ChildView extends Component {

  render() {
    return (
      <div className="ChildView">
      <h5>ChildView</h5>
          <ChildRow people={this.props.children} />
      </div>
    )
  }

}

export default ChildView;
