import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  render() {
    return (
      <div className="TreeDisplayCore">

        // {this.props.people.map( (person) =>
        //   person.role === 'focus' ?
        //   <PersonDisplayTile person={person} key={person._id} /> :
        //   <PersonMini person={person} key={person._id} />
        //   )}

      </div>
    )
  }

}

export default TreeDisplayCore;
