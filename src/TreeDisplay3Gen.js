import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      readyToDisplay: 'no',
      focus: {},
      father: null,
      mother: null,
      husband: null,
      wife: null,
      children: []
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
      focus: props.people.find((person) => person._id === '5b0ef6074896a175634c115b'),
      father: props.people.find((person) => person._id === '5b1048cba064560004bb6b6d'),
      mother: props.people.find((person) => person._id === '5b0f02694896a175634c115c'),
      wife: props.people.find((person) => person._id === '5b10442ea064560004bb6b6c'),
      children: [ props.people.find((person) => person._id === '5b0f0cc44896a175634c115d') ]
    };
  }

  render() {
    let list = this.state.focus ?
    <div>
    <p>focus {this.state.focus.firstname}</p>
    <p>father {this.state.father.firstname}</p>
    <p>mother {this.state.mother.firstname}</p>
    <p>wife {this.state.wife.firstname}</p>
    <p>child {this.state.children[0].firstname}</p>
    </div>
    :
    'empty list';

    return (
      <div className="TreeDisplay3Gen">
        <TreeDisplayHeader />
        {list}
      </div>
    )
  }

}

export default TreeDisplay3Gen;
