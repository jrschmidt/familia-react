import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  render() {
    return (
      <div className="TreeDisplayCore">
      <h5>TreeDisplayCore</h5>
      <PersonDisplayTile person={this.props.focus}/>
      <PersonMini person={this.props.father}/>
      <PersonMini person={this.props.mother}/>
      <PersonMini person={this.props.wife}/>
      </div>
    )
  }

}

export default TreeDisplayCore;
