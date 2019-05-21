import React, { Component } from 'react';
import './TreeDisplay3Gen.css';
import TreeDisplayHeader from './TreeDisplayHeader';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  render() {
    const samplePerson = {firstname: 'Adam', surname: 'Zimmerman'};
    return (
      <div className="TreeDisplay3Gen">
        <h2>TreeDisplay3Gen Component</h2>
        <TreeDisplayHeader />
        <PersonDisplayTile person={samplePerson} />
        <ul>
          {this.props.people.map( (person, key) => <PersonMini person={person} key={person._id} /> )}
        </ul>
      </div>
    )
  }

}

export default TreeDisplay3Gen;
