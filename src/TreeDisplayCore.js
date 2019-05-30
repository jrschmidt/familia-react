import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  render() {
    return (
      <div className="TreeDisplayCore">
      <PersonDisplayTile person={this.props.focus} role="focus-m" />
      <PersonMini person={this.props.father} role="father-m" />
      <PersonMini person={this.props.mother} role="mother-m" />
      <PersonMini person={this.props.wife} role="wife" />
      </div>
    )
  }

}

export default TreeDisplayCore;
