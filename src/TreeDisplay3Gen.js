import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  render() {
    return (
      <div className="TreeDisplay3Gen">
        <TreeDisplayHeader />
        {this.props.people.map( (person, key) => {
          if (person._id === '5b0ef6074896a175634c115b')
            return <PersonDisplayTile person={person} />
          else
            return <PersonMini person={person} key={person._id} />
        })}

      </div>
    )
  }

}

export default TreeDisplay3Gen;
