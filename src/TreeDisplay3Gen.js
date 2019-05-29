import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);

    this.state = {
      viewPersons: {
        focus: this.props.people.find((person) => person._id === '5b0ef6074896a175634c115b'),
        father: this.props.people.find((person) => person._id === '5b1048cba064560004bb6b6d'),
        mother: this.props.people.find((person) => person._id === '5b0f02694896a175634c115c'),
        wife: this.props.people.find((person) => person._id === '5b10442ea064560004bb6b6c'),
        children: [ this.props.people.find((person) => person._id === '5b0f0cc44896a175634c115d') ]
      }
    };
  }

  render() {
    return (
      <div className="TreeDisplay3Gen">
        <TreeDisplayHeader />
        <p>{Object.keys(this.state.viewPersons)}</p>
        <p>{this.state.viewPersons['wife'].firstname}</p>
      </div>
    )
  }

}

export default TreeDisplay3Gen;
